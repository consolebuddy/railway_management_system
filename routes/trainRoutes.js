const express = require('express');
const { addTrain, getSeatAvailability } = require('../controllers/trainController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/', authenticate, authorize(['admin']), addTrain);
router.get('/availability', authenticate, getSeatAvailability);

module.exports = router;
