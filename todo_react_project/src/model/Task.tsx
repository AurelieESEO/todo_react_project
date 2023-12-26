type Task = {
  id: number;
  title: string;
  deadline: string;
  priority: string;
  isSelected: boolean;
  tags : string[];
  tagsPossibles : string[];
  description : string;
};

export default Task;
