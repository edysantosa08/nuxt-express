const { Router } = require('express')

const router = Router()

// Test route
router.get('/test', (req, res) => {
  res.json({'content':'Test API!'})
})



module.exports = router
