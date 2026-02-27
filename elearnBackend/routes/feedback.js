const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

// @route   POST /api/feedback
// @desc    Submit feedback
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, rating, message } = req.body;

        const newFeedback = new Feedback({
            name,
            rating,
            message
        });

        const savedFeedback = await newFeedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully', feedback: savedFeedback });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
