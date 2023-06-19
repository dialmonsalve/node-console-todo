import colors from 'colors';

import Tarea from "./task.js";

const { green, red, white } = colors

class Tasks {

  _taskList = {};

  get ArrayList() {

    const list = []

    Object.keys(this._taskList).forEach(key => {
      list.push(this._taskList[key]);
    });

    return list
  }

  constructor() {
    this._taskList = {}
  }

  loadTasksFromArray(tareas = []) {

    tareas.forEach(tarea => {
      this._taskList[tarea.id] = tarea;
    });

  }

  createTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._taskList[tarea.id] = tarea;

  }

  listAllTasks() {

    console.log();
    this.ArrayList.map(({ description, completeAt }, index) => {

      if (completeAt !== null) {
        console.log(`${green(index + 1., '-', white(description), white('::'), completeAt)} `);
        return
      }
      console.log(`${red(index + 1., '-', white(description), white('::'), 'Pendiente')}`);
    })
  }

  listTaskPendingComplete(complete = true) {
    console.log();

    this.ArrayList.map(({ description, completeAt }, index) => {

      if (complete && completeAt !== null) {
        console.log(`${green(index + 1., '-', white(description), white('::'), completeAt)} `);
      }

      if (!complete && completeAt === null) {
        console.log(`${red(index + 1., '-', white(description), white('::'), 'Pendiente')}`);
      }
    })
  }

  deleteTask(id = '') {

    if (this._taskList[id]) {
      delete this._taskList[id];
    }

  }

  toggleCompleted(ids = []) {

    ids.forEach(id => {
      const tarea = this._taskList[id];
      if (!tarea.completeAt) {
        tarea.completeAt = new Date().toISOString();
      }
    });

    this.ArrayList.forEach(tarea => {
      if (!ids.includes(tarea.id)) {
        this._taskList[tarea.id].completeAt = null
      }
    });
  }
}

export default Tasks;