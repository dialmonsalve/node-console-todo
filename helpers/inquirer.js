
import colors from 'colors';
import inquirer from 'inquirer';

const { rainbow, green, cyan } = colors

const preguntas = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${green('1.')} Crear tarea`
      },
      {
        value: '2',
        name: `${green('2.')} Listar tareas`
      },
      {
        value: '3',
        name: `${green('3.')} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${green('4.')} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${green('5.')} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${green('6.')} Borrar tarea`
      },
      {
        value: '0',
        name: `${green('0.')} Salir`
      },
    ]
  }
]

const inquirerMenu = async () => {

  console.clear();
  console.log(rainbow('============================='))
  console.log(cyan('    Seleccione una opción'))
  console.log(rainbow('============================='))

  const { option } = await inquirer.prompt(preguntas)

  return option
}

const pausa = async () => {
  await inquirer.prompt([{
    type: 'input',
    name: 'pausa',
    message: `\nPresione ${green('ENTER')} para continuar`
  }])
}

export {
  inquirerMenu,
  pausa
}
