const router = require('express').Router()
const textRouter = require('../controller/text')

router.post('/text',textRouter.codify)


module.exports = router