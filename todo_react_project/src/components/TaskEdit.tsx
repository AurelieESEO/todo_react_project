import React from "react";
import Task from "./Task.tsx";

type Props = {
  task: typeof Task;
};

const TaskEdit: React.FC<Props> = (props: Props) => {
  const [task, setTask] = React.useState(props.task);
  const prioritiesAvailable = ['Urgent', 'Moyen', 'Faible'];



  return (
  <div className={`h-full w-full card bg-base-100 shadow-xl gap-1`}>
    <div className="card-body">
      <input className={"input card-title w-full max-w-xs"} value={task.title}
             type="text"/>
      <div className={'flex flex-column'}>
        <p>Deadline</p>
        <input type="date" value={task.deadline} />
      </div>
      <div className={'flex flex-column'}>
        <p>Priority</p>
        <select className="select select-bordered w-full max-w-xs" value={task.priority}>
          <option disabled selected>Priority</option>
          {prioritiesAvailable.map((priority, index) => (
              <option key={index}>{priority}</option>
          ))}
        </select>
      </div>
      <textarea className={"textarea textarea-bordered w-full h-32"}
                placeholder={"Description"}/>

    </div>
  </div>
)
}

export default TaskEdit;