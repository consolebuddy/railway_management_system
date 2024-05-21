const express = require('express');
const { bookSeat, getBookingDetails } = require('../controllers/bookingController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticate, bookSeat);
router.get('/', authenticate, getBookingDetails);

module.exports = router;
