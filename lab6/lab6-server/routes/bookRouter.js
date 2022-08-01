const express = require('express');
const bookController = require('../controllers/bookController');
//const { getAll } = require('../models/books');


const router = express.Router();


router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.save);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.deleteById);





module.exports = router;