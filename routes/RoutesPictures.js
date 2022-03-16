const express = require('express')
const router = express.Router();
const controllerPictures = require ('../controllers/ControllerPictures')

const path = 'picture'


router.get( `/${path}`, controllerPictures.saludar );
router.post( `/${path}`, controllerPictures.create );
router.get(`/${path}/getAll`, controllerPictures.getAll);
router.get(`/${path}/generarRandom`, controllerPictures.generatePictures)
module.exports = router