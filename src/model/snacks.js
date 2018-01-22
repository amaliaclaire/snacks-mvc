const uuid = require('uuid/v4')
const snacks = []

function getAll () {
  return snacks
}

function create (name) {
  const snack = {id: uuid(), name}
  snacks.push(snack)
  return snack
}

module.exports = {
  getAll,
  create
}
