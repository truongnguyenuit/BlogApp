const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization')
  const token = auth
}