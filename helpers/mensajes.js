import colors from 'colors';

const mostrarMenu = () => {

  return new Promise( resolve => {

    console.clear();
    console.log(colors.rainbow('============================='))
    console.log(colors.rainbow('    Seleccione una opción'))
    console.log(colors.rainbow('============================='))

    console.log(`${colors.green('1.')} Crear tarea`);
    console.log(`${colors.green('2.')} Listar tareas`);
    console.log(`${colors.green('3.')} Listar tareas completadas`);
    console.log(`${colors.green('4.')} Listar tareas pendientes`);
    console.log(`${colors.green('5.')} Completar tarea(s)`);
    console.log(`${colors.green('6.')} Borrar tarea`);
    console.log(`${colors.green('0.')} Salir\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`Seleccione una opción: `, (opt) => {
      readline.close();
      resolve(opt)
    })
  })
}

const pausa = () => {

  return new Promise(resolve => {

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`\nPresione ${colors.green('ENTER')} para continuar\n`, (opt) => {
      readline.close();
      resolve()
    })
  })

}

module.exports = {
  mostrarMenu,
  pausa
}