import Tag from "./Tag";

type Task = {
  id: number;
  title: string;
  deadline: string;
  priority: string;
  isSelected: boolean;
  tags : Tag[];
  description : string;
  isDone: boolean;
};

export default Task;
