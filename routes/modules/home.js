const express = require('express')
const router = express.Router()

const URLmodel = require('../../models/shortUrl')
const { createShortURL } = require('../../public/javascripts/shortUrl.js')


router.get('/', (req, res) => (res.render('index')))

router.post('/', (req, res) => {
  const { url } = req.body

  URLmodel.findOne({ fullUrl: url })
    .lean()
    .then((data) => data ? data : URLmodel.create({ fullUrl: url, shortUrl: createShortURL() }))
    .then((data) => res.render('index', { shortUrl: req.headers.referer + data.shortUrl }))
    .catch(error => console.log(error))
})

router.get('/:shortUrl', (req, res) => {
  URLmodel.findOne({ shortUrl: req.params.shortUrl })
    .lean()
    .then((data) => data ? res.redirect(data.fullUrl) : res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router