import React from "react";
import Task from "./Task.tsx";
import TaskEdit from "./TaskEdit.tsx";

const TaskView: React.FC = () => {
  const [tasksName, setTasksName] = React.useState(['Faire la vaiselle', 'Acheter du pain', 'Faire le sapin de Noël']);
  const [task, setTask] = React.useState<React.ReactElement | null>(null);

  const addValue = () => {
    setTasksName([...tasksName, 'Task']);
  }

  const handleTaskClick = (task: React.ReactElement) => {
    // Mettez à jour l'état avec les détails de la tâche
    setTask(task);
  };

  return (
      <div className="px-4 py-8 flex flex-row gap-8 justify-start w-full h-full">
        {/*w-3/6 if sidebar short*/}
        <div className="w-3/5 px-4 flex flex-col justify-normal overflow-y-scroll">
          {tasksName.map((taskName, index) => (
              <Task key={index} title={taskName}
                    onTaskClick={() => handleTaskClick(<Task
                        title={taskName}/>)}/>
          ))}
        </div>
        <TaskEdit task={task}></TaskEdit>

        <div className="fixed bottom-4 right-2">
          <button className="btn btn-neutral btn-circle flex flex-end"
                  onClick={addValue}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
          </button>
        </div>
      </div>
  );
}

export default TaskView;
