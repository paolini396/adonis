'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user () {
    return this.belongsTo('App/Models/User') // pertence a um usuário
  }

  tasks () {
    return this.hasMany('App/Models/Task') // um projeto pode ter várias tarefas associadas a ele.
  }
}

module.exports = Project
