const speakeasy = require('speakeasy');

exports.requireToken = (req, res, next) => {
  const { token } = req.body;
  // Find the user with the given email address
  const user = users.find(u => u.email === req.user.email);
  // Verify the user's token
  const verified = speakeasy.totp.verify({
    secret: user.secret,
    encoding: 'base32',
    token,
    window: 1
  });
  if (!verified) {
    return res.status(401).send('Invalid token');
  }
  // Token is valid, proceed to the next middleware or route handler
  next();
}

app.post('/protected', requireToken, (req, res) => {
    // This route handler will only be called if the user's token is valid
    res.send('Protected resource accessed successfully');
  });