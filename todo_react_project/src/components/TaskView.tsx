import React from "react";
import Task from "./Task.tsx";
import TaskEdit from "./TaskEdit.tsx";

const TaskView: React.FC = () => {
  const initialTasks = [
    { id: 1, title: "Faire la vaisselle", deadline: "2021-10-10", priority: "Urgent" },
    { id: 2, title: "Faire le ménage", deadline: "2021-10-10", priority: "Moyen" },
    { id: 3, title: "Faire les courses", deadline: "2021-10-10", priority: "Faible" },
  ];

  const [tasks, setTasks] = React.useState<typeof Task[]>(initialTasks);
  const [taskBeingEdited, setTaskBeingEdited] = React.useState<typeof Task | null>(
      tasks[0]
  );

  const addValue = () => {
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = year + "-" + month + "-" + date;
    // Ajoutez une nouvelle tâche avec un titre par défaut
    const newTask = { id: tasks.length + 1, title: "Task" , priority: "Moyen", deadline: currentDate};
    setTasks([...tasks, newTask]);
  };

  const handleTaskClick = (task: typeof Task) => {
    setTaskBeingEdited(task);
  };

  return (
      <div className="px-4 py-8 flex flex-row gap-4 justify-start w-full h-full">
        {/*w-3/6 if sidebar short*/}
        <div className="w-3/6 px-4 flex flex-col justify-normal overflow-y-scroll">
          {tasks.map((task) => (
              <Task
                  id={task.id}
                  title={task.title}
                  deadline={task.deadline}
                  priority={task.priority}
              />
          ))}
        </div>
        <TaskEdit task={taskBeingEdited}></TaskEdit>

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
