const User = require('../models/user');
const jwt = require('jsonwebtoken');

const getUserInfo = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token tidak tersedia' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret_key');

    const user = await User.findByPk(decodedToken.userId, { attributes: { exclude: ['password'] } });

    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserInfo };
