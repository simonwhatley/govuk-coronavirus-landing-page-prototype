'use strict'

const express = require('express')
const router = express.Router()

// ----------------------------------------------------------------------------
// Home
// ----------------------------------------------------------------------------

router.get('/', (req, res) => {
  // delete req.session.data
  res.render('index', {
    actions: {
      home: `${req.baseUrl}/`
    }
  })
})

// ----------------------------------------------------------------------------
// Landing page
// ----------------------------------------------------------------------------

router.get('/coronavirus', (req, res) => {
  res.render('index', {
    actions: {
      home: `${req.baseUrl}/`
    }
  })
})

// ----------------------------------------------------------------------------
// Hubs
// ----------------------------------------------------------------------------

router.get('/coronavirus/business-support', (req, res) => {
  res.render('business-support', {
    actions: {
      home: `${req.baseUrl}/`
    }
  })
})

router.get('/coronavirus/worker-support', (req, res) => {
  res.render('worker-support', {
    actions: {
      home: `${req.baseUrl}/`
    }
  })
})

router.get('/coronavirus/education-and-childcare', (req, res) => {
  res.render('education-and-childcare', {
    actions: {
      home: `${req.baseUrl}/`
    }
  })
})

// ----------------------------------------------------------------------------
// Add routes above this line /////////////////////////////////////////////////
// ----------------------------------------------------------------------------

module.exports = router
