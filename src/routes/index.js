const express = require('express')
const router = express.Router()
const { addUsers, getUser, getUsers, updateUser, deleteUser } = require('../controllers/user')
const { addLiterature, getSearch, getLiteraturesProfile, updateLiterature, deleteLiterature } = require('../controllers/literature')
const { getMyCollections } = require('../controllers/collections')
const { register, login, checkAuth } = require('../controllers/auth');

// Middlewares
const { auth, admin } = require('../middlewares/auth')
const { uploadPDF, uploadImage } = require('../middlewares/uploadFile')

// Route User
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/user', auth, addUsers)
router.put('/user/:id', auth, uploadImage("photo"), updateUser)
router.delete('/user/:id', auth, admin, deleteUser)

// Route Literature
router.get("/literature", auth, getSearch);
router.get("/profile/:id/literatures", getLiteraturesProfile);
router.post('/literature', auth, uploadPDF("attache"), addLiterature)
router.delete('/literature/:id', auth, admin, deleteLiterature)

// Route Collections
router.get('/collections', auth, getMyCollections)

// Route Auth
router.post('/login', login);
router.post('/register', register);
router.get("/check-auth", auth, checkAuth);

module.exports = router;