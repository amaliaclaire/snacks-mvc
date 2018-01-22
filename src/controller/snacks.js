const model = require('../model/snacks')

function getSnacks (req, res, next) {
  const snacks = model.getAll()
  res.status(200).json({data: snacks})
}

function getSnack (req, res, next) {
  const id = req.params.id
  const name = req.params.name
  const snack = model.getSnack(id)

  if(!snack) {
    return next({
      status: 404,
      message: `couldn't find snack with that specific name ${name}`
    })
  }
  res.status(200).json({data: snack})
}

function createSnack (req, res, next) {
  const {name} = req.body
  const snack = model.create(name)

   if(!name) {
     return next ({
       status: 400,
       message: `field name are required`
     })
   }
   res.status(201).json({data: snack})
}

function deleteSnack(req, res, next){
  let id = req.params.id
  let snack = model.deleteSnack(id)

  if(!snack.length) {
    return next({
      status: 404,
      message: `could not delete snack`
    })
  }
  res.status(204).json({data: snack})
}

module.exports = {getSnacks, createSnack, getSnack, deleteSnack}
