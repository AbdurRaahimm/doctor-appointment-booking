const authVerify = require('../middleware/authVerify');
const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');
const router = require('express').Router();

// Get all approved doctors list 
router.get('/get-approved-doctors',  async (req, res) => {
    try {
        const doctors = await Doctor.find({ status: 'approved' });
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;