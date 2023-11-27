const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../controllers/authController.js')

//Passport config
// require('../config/passport.js')(passport)

router.post('/signup', authController.createUser, (req, res) => {
  console.log('authRouter step')
  res.json({ newUser: true })
})

// router.post('/login', passport.authenticate('local', { failureMessage: 'User was not found' })), (req, res) => {
//   console.log('Entered authRouter route')
//   req.session.user = req.user
//   console.log('req.user: ', req.user)
//   return res.status(200).json(req.user)
// }

router.get('/logout', (req, res) => {
  req.logout()
  console.log('User logged out')
  console.log('req.user: ', req.user)
  res.sendStatus(200)
})

module.exports = router;
