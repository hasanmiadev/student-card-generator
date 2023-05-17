const router = require('express').Router()

router.get('/app', (req, res)=> {
   res.send("HELLO WORD")
})


module.exports = router