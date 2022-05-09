// create and export express.Router()

const router = require('express').Router()



//make a first route in places.js
//homepage
router.get('/', (req, res) => {
    res.send('GET /places')
})


module.exports = router
 ss