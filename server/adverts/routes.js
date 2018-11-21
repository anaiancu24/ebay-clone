const { Router } = require('express')
const Adverts = require('./model')
var cors = require('cors')


const router = new Router()

router.get('/adverts', cors(), (req, res, next) => {
    Adverts
    .findAll()
    .then(adverts => {
        res.send({adverts})
    })
    .catch(error => next(error))
})

router.get('/adverts/:id', (req, res, next) => {
    Adverts
      .findById(req.params.id)
      .then(advert => {
        if (!advert) {
          return res.status(404).send({
            message: `Advert does not exist`
          })
        }
        return res.send(advert)
      })
      .catch(error => next(error))
  })

  router.post('/adverts', (req, res, next) => {
    Adverts
      .create(req.body)
      .then(advert => {
        if (!advert) {
          return res.status(404).send({
            message: `Advert does not exist`
          })
        }
        return res.status(201).send(advert)
      })
      .catch(error => next(error))
  })

module.exports = router