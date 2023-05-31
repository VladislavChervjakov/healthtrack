const jwt = require("jsonwebtoken");

/** Middleware for verifying JWT token */
function verifyToken(req, res, next) {
  const token = req.header("auth-token");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ err: "Invalid token" });
  }
}

module.exports = {
  verifyToken,
};
