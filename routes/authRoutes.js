const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

const registerValidation = [
  body('nama').notEmpty().withMessage('Nama harus diisi'),
  body('email').isEmail().withMessage('Email tidak valid'),
  body('password').isLength({ min: 6 }).withMessage('Password harus memiliki minimal 6 karakter'),
];

const loginValidation = [
  body('email').isEmail().withMessage('Email tidak valid'),
  body('password').isLength({ min: 6 }).withMessage('Password harus memiliki minimal 6 karakter'),
];

router.post('/register', registerValidation, registerUser);

router.post('/login', loginValidation, loginUser);

module.exports = router;
