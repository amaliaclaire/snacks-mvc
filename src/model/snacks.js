const uuid = require('uuid/v4')
const snacks = []

function getAll () {
  return snacks
}

function getSnack (id) {
  const snack = snacks.find(snack => snack.id === id)
  return snack
}


function create (name) {
  const snack = {id: uuid(), name}
  snacks.push(snack)
  return snack
}

function deleteSnack (id) {
  let index = snacks.findIndex(snack => snack.id === id)
  if(index === -1) return []
  return snacks.splice(index, 1)
}



module.exports = {
  getAll,
  create,
  getSnack,
  deleteSnack
}
