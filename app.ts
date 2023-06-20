import colors from 'colors';
import {
  confirm, 
  inquirerMenu, 
  readInput, 
  listTaskDelete, 
  showCheckList,
  pausa, 
} from './helpers/inquirer.js';

import Tasks from './models/tasks.js';
import { saveTask, readDB } from './helpers/saveFile.js';

console.clear()

const main = async () => {

  let opt = '';

  const tasks = new Tasks()
  const tareasDB = readDB();

  if (tareasDB) {
    tasks.loadTasksFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Descripción:');
        tasks.createTarea(description)
        break;

      case '2':
        tasks.listAllTasks();
        break;

      case '3':
        tasks.listTaskPendingComplete()
        break

      case '4':
        tasks.listTaskPendingComplete(false)
        break

      case '5':
        const ids = await showCheckList(tasks.ArrayList)
        tasks.toggleCompleted(ids);
        break

      case '6':
        const id = await listTaskDelete(tasks.ArrayList)

        if (id !== '0') {
          const ok = await confirm('¿Are you sure that you wish to delete?')
          if (ok) {
            tasks.deleteTask(id)
            console.log(colors.yellow('Task delete correctly'));
          }
        }
        break
    }

    saveTask(tasks.ArrayList);

    if (opt !== '0') await pausa();

  } while (opt !== '0');

}

main();