const router = require('express').Router();
const User = require('../models/userModel');
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
router.get('/forgot-password', async (req, res) => {
    try {
        // Check if the user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error('User does not exist');
        }

        // Generate a token
        const token = jwt.sign({ _id: user._id }, process.env.accessToken, { expiresIn: '5m' });

        // Send the token to the user's email address 
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.password
            }
        });

        const mailOptions = {
            from: process.env.email,
            to: user.email,
            subject: 'Password Reset',
            text: `Click on the link to reset your password: http://localhost:5173/reset-password/${token}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error('Email not sent');
            }
            res.status(200).json({ message: 'Email sent' });
        }
        );

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




module.exports = router;