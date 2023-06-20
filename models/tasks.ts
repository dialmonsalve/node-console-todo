import colors from 'colors';

import Task from "./task.js";
import { ITask } from '../interfaces/interfaces';

type State = 'complete' | 'incomplete'

const { green, red, white } = colors

class Tasks {

  private taskList: { [key: string]: ITask } = {};

  get ArrayList() {

    const list: ITask[] = []

    Object.keys(this.taskList).forEach((id: string) => {
      list.push(this.taskList[id]);
    });

    return list
  }

  constructor() {
    this.taskList = {}
  }

  loadTasksFromArray(tasks: ITask[]) {

    tasks.forEach((task: ITask) => {
      this.taskList[task.id] = task;
    });

  }

  createTarea(desc: string) {
    const task = new Task(desc);
    this.taskList[task.id] = task;

  }

  listAllTasks() {

    console.log();
    this.ArrayList.map(({ description, completeAt }: ITask, index: number) => {

      if (completeAt !== null) {
        console.log(this.completeOrIncomplete('complete', index, description, completeAt));
        return
      }
      console.log(this.completeOrIncomplete('incomplete', index, description));
    })
  }

  listTaskPendingComplete(complete = true) {
    console.log();

    this.ArrayList.map(({ description, completeAt }, index) => {

      if (complete && completeAt !== null) {
        console.log(this.completeOrIncomplete('complete', index, description, completeAt))
      }

      if (!complete && completeAt === null) {
        console.log(this.completeOrIncomplete('incomplete', index, description))
      }
    })
  }
  deleteTask(id: string) {

    if (this.taskList[id]) {
      delete this.taskList[id];
    }
  }

  toggleCompleted(ids: string[]) {

    ids.forEach(id => {
      const tarea: ITask = this.taskList[id];
      if (!tarea.completeAt) {
        tarea.completeAt = new Date().toISOString();
      }
    });

    this.ArrayList.forEach((task: ITask) => {
      if (!ids.includes(task.id)) {
        this.taskList[task.id].completeAt = null
      }
    });
  }

  completeOrIncomplete(state: State, index: number, description: string, completeAt: string = red('Pending')) {

    if (state = 'complete') {
      return `${green((index + 1).toString())} - ${white(description)} ${white('::')} ${green(completeAt)} `
    } else {
      return `${red((index + 1).toString())} - ${white(description)} ${white('::')} ${completeAt}`;
    }


  }
}

export default Tasks;