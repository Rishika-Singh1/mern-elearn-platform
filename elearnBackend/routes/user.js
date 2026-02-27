const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Update User Profile
router.put('/profile', auth, async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if new email is already taken by another user
        if (email) {
            const existingUser = await User.findOne({ email });
            if (existingUser && existingUser.id !== req.user.id) {
                return res.status(400).json({ message: 'Email is already in use' });
            }
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { $set: { name, email } },
            { new: true, select: '-password' } // Return updated doc, exclude password
        );

        res.json(updatedUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Change Password
router.put('/password', auth, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.user.id);

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect current password' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedNewPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Enroll in a Course
router.post('/enroll', auth, async (req, res) => {
    try {
        const { courseId } = req.body;

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if already enrolled
        if (user.enrolledCourses.includes(courseId)) {
            return res.status(400).json({ message: 'Already enrolled in this course' });
        }

        user.enrolledCourses.push(courseId);
        await user.save();

        const updatedUser = await User.findById(req.user.id).select('-password');
        res.json(updatedUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Unenroll from a Course
router.post('/unenroll', auth, async (req, res) => {
    try {
        const { courseId } = req.body;

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Remove the courseId from enrolledCourses
        user.enrolledCourses = user.enrolledCourses.filter(id => id !== courseId);
        await user.save();

        const updatedUser = await User.findById(req.user.id).select('-password');
        res.json(updatedUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Record a Quiz Attempt
router.post('/quiz', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.quizzesAttempted = (user.quizzesAttempted || 0) + 1;
        await user.save();

        const updatedUser = await User.findById(req.user.id).select('-password');
        res.json(updatedUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
