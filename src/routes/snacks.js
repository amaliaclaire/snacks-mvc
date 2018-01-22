const express = require('express')
const router = express.Router()
const ctrl = require('../controller/snacks')

router.get('/', ctrl.getSnacks)
router.get('/:id', ctrl.getSnack)
router.post('/', ctrl.createSnack)
router.delete('/:id', ctrl.deleteSnack)

module.exports = router
