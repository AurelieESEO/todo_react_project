type Task = {
  id: number;
  title: string;
  deadline: string;
  priority: string;
  isSelected: boolean;
  tags : string[];
  description : string;
  isDone: boolean;
};

export default Task;
