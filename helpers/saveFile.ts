import fs from 'fs';
import { ITask } from '../interfaces/interfaces.js';

const file = './db/tasks.json';

const saveTask = (data:ITask[]) => {

  fs.writeFileSync(file, JSON.stringify(data))

}

const readDB = () => {
  if (!fs.existsSync(file)) {
    return null;
  }

  const info = fs.readFileSync(file, { encoding: 'utf-8' });
  const data = JSON.parse(info);

  return data;
}

export { saveTask, readDB }