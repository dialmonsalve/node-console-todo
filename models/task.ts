import { v4 as uuidv4 } from 'uuid';

class Task {
  public id:string;
  public description: string;
  public completeAt : string | null;

  constructor(description:string){
    this.id = uuidv4();
    this.description = description;
    this.completeAt = null
  }
}

export default Task;