
import colors from 'colors';
import inquirer from 'inquirer';

const { rainbow, green, cyan } = colors

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: '1',
        name: `${green('1 -')} Create task`
      },
      {
        value: '2',
        name: `${green('2 -')} List tasks`
      },
      {
        value: '3',
        name: `${green('3 -')} List completed tasks`
      },
      {
        value: '4',
        name: `${green('4 -')} List pending tasks`
      },
      {
        value: '5',
        name: `${green('5 -')} Complete task(s)`
      },
      {
        value: '6',
        name: `${green('6 -')} Delete task`
      },
      {
        value: '0',
        name: `${green('0 -')} Exit`
      },
    ]
  }
]

const inquirerMenu = async () => {
  console.clear();
  console.log(rainbow('===================='))
  console.log(cyan('    Select Option'))
  console.log(rainbow('===================='))

  const { option } = await inquirer.prompt(questions)

  return option
}

const pausa = async () => {
  await inquirer.prompt([{
    type: 'input',
    name: 'pausa',
    message: `\nPress ${green('ENTER')} to continue`
  }])
}

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please inserte a value';
        }
        return true
      }
    }
  ];

  const { description } = await inquirer.prompt(question);

  return description;
}

const listTaskDelete = async (tareas = []) => {

  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`
    };
  });

  choices.unshift({
    value: '0',
    name: '0'.green + ' Cancel'
  })

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices
    }
  ];

  const { id } = await inquirer.prompt(questions)

  return id
}

const confirm = async (message) => {

  const questions = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const { ok } = await inquirer.prompt(questions)

  return ok
}

const showCheckList = async (tareas = []) => {

  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`,
      checked: (tarea.completeAt) ? true : false
    };
  });

  const questions = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Select',
      choices
    }
  ];

  const { ids } = await inquirer.prompt(questions)

  return ids
}



export {
  inquirerMenu,
  pausa,
  readInput,
  listTaskDelete,
  confirm,
  showCheckList
}
