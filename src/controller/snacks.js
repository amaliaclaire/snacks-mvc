const model = require('../model/snacks')

function getSnacks (req, res, next) {
  const snacks = model.getAll()
  res.status(200).json({data: snacks})
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


module.exports = {getSnacks, createSnack}
