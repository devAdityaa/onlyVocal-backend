const express = require('express');
const router = express.Router();
// Importing user controller
const protectedController = require('../controllers/protectedController');

router.post('/setOnlyfansAccounts', protectedController.setOFA);
router.get('/getOnlyfansAccounts', protectedController.getOFA);
router.post('/cloneVoice', protectedController.cloneVoice);
router.get('/create-stripe-session', protectedController.createStripeSession);
router.get('/paymentHistory', protectedController.getPayments);
router.post('/changePassword', protectedController.changePass);

module.exports = router;