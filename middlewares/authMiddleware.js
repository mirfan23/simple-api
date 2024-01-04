const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]; // Ambil token dari header Authorization

  if (!token) {
    return res.status(401).json({ message: 'Token tidak tersedia, akses ditolak' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret_key');
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token tidak valid' });
  }
};
