import { v4 as uuidv4 } from 'uuid';

class Task {
  id = '';
  description = '';
  completeAt = null;

  constructor(description){
    this.id = uuidv4();
    this.description = description;
    this.completeAt = null
  }
}

export default Task;