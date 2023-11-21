const { users, User } = require('./User');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

app.post('/Registro', (req, res) => {
  const { name, email, password } = req.body;
  // Generate a new secret key for the user
  const secret = speakeasy.generateSecret({ length: 20 });
  // Save the user data in the database
  const user = new User(users.length + 1, name, email, password, secret.base32);
  users.push(user);
  // Generate a QR code for the user to scan
  QRCode.toDataURL(secret.otpauth_url, (err, image_data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    // Send the QR code to the user
    res.send({ qrCode: image_data });
  });
});