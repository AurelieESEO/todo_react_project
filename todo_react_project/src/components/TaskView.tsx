import React from "react";
import TaskItem from "./TaskItem.tsx";
import TaskEdit from "./TaskEdit.tsx";
import Task from "../model/Task.tsx";

const TaskView: React.FC = () => {
  const initialTasks: Task[] = [
    { id: 1, title: "Faire la vaisselle", deadline: "2021-10-10", priority: "Urgent" },
    { id: 2, title: "Faire le ménage", deadline: "2021-10-10", priority: "Moyen" },
    { id: 3, title: "Faire les courses", deadline: "2021-10-10", priority: "Faible" },
  ];

  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [taskBeingEdited, setTaskBeingEdited] = React.useState<Task | null>(initialTasks[0]);

  const addValue = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const newTask: Task = { id: tasks.length + 1, title: "Task", priority: "Moyen", deadline: currentDate };
    setTasks([...tasks, newTask]);
  };

  const handleTaskClick = (task: Task) => {
    setTaskBeingEdited(task);
  };

  return (
      <div className="px-4 py-8 flex flex-row gap-4 justify-start w-full h-full">
        <div className="w-3/6 px-4 flex flex-col justify-normal overflow-y-auto">
          {tasks.map((task) => (
              <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  deadline={task.deadline}
                  priority={task.priority}
                  onClick={() => handleTaskClick(task)}
              />
          ))}
        </div>

        <TaskEdit task={taskBeingEdited}></TaskEdit>

        <div className="fixed bottom-4 right-2">
          <button className="btn btn-neutral btn-circle flex flex-end" onClick={addValue}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
  );
};

export default TaskView;
