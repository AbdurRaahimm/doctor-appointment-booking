const router = require('express').Router();
const User = require('../models/userModel');
const Doctor = require('../models/doctorModel');
const authVerify = require('../middleware/authVerify');
const multer = require('multer');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// user register
router.post('/register', upload.single('profileImg'), async (req, res) => {
    try {
        // Check if the user already exists
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            throw new Error('User already exists');
        }

        // Check if file upload was successful
        if (!req.file || !req.file.filename) {
            throw new Error('Image upload failed');
        }

        // password validation
        if (req.body.password.length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }
       
        // Hash the password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // // image url 
        req.body.image = req.file.filename;
        // Create a new user
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// user login
router.post('/login', async (req, res) => {
    try {
        // Check if the user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error('User does not exist');
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        if (isMatch) {
            // Generate a token
            const Token = jwt.sign({ _id: user._id, username: user.username, image: user.image }, process.env.JWT_SECRET, { expiresIn: '30m' });
            // Store the token in a cookie
            res.cookie('Token', Token, {
                maxAge: 30 * 60 * 1000, // 30 minutes
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            });

            // res.status(200).json({ message: 'Login successful', user: { _id: user._id, username: user.username, image: user.image } });
            res.status(200).json({ message: 'Login successful', user: { _id: user._id, username: user.username, image: user.image, Token: Token } });

        } else {
            res.status(400).json({ message: 'Login failed' });
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});

// forgot password
router.post('/forgot-password', async (req, res) => {
    try {
        // Check if the user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error('User does not exist');
        }
        
        // Generate a token
        const Token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' });

        // Send an email
        const transporter = nodemailer.createTransport({
            host: "smtp.elasticemail.com",
            port: 2525,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: 'Password Reset Notification',
            html: `<h1>Click <a href="http://localhost:5173/reset-password/${Token}">here</a> to reset your password</h1>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error('Email could not be sent');
            }
            res.status(200).json({ message: 'Email sent successfully' });
        }
        );

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// reset password
router.post('/reset-password/:token', async (req, res) => {
    try {
        // Verify the token
        const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
        // throw an error if the token is invalid
        if (!decoded) {
            throw new Error('Invalid token! ');
        }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        await User.findByIdAndUpdate(decoded._id, { password: hashedPassword });
        res.status(200).json({ message: 'Password reset successful' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});


// logout
router.get('/logout', (req, res) => {
    try {
        // Clear the cookie
        res.clearCookie('Token');
        res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// get all users 
router.get('/get-users', authVerify, async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// get user by id
router.get('/get-user/:id', authVerify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id, { password: 0 });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);


// doctor apply account 
router.post('/apply-doctor', authVerify, async (req, res) => {
    try {
        // Check if the doctor already exists
        const doctorExists = await Doctor.findOne({ email: req.body.email });
        if (doctorExists) {
            throw new Error('Doctor already exists');
        }

        // Create a new doctor
        const newDoctor = new Doctor({ ...req.body, status: 'pending'});
        await newDoctor.save();
        const adminUser = await User.findOne({ isAdmin: true }); 

        const unseenNotifications = adminUser.unseenNotifications;
        unseenNotifications.push({
            type: 'New doctor application',
            message: `${newDoctor.name} has applied for a doctor account`,
            data:{
                doctorId: newDoctor._id,
                doctorName: newDoctor.name
            },
            link: `/dashboard/doctor-list`
        });

        await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });
        res.status(201).json({ message: 'Doctor application submitted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

// mark all notification as read by id
router.put('/mark-all-as-read/:id', authVerify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const seenNotifications = user.seenNotifications.concat(user.unseenNotifications);
        await User.findByIdAndUpdate(req.params.id, { unseenNotifications: [], seenNotifications });
        res.status(200).json({ message: 'All notifications marked as read' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// delete all notification by id 
router.delete('/delete-all-notifications/:id', authVerify, async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { unseenNotifications: [], seenNotifications: [] });
        res.status(200).json({ message: 'All notifications deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});


module.exports = router;