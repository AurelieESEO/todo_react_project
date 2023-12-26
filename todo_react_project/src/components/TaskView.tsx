import React from "react";
import TaskItem from "./TaskItem.tsx";
import TaskEdit from "./TaskEdit.tsx";
import Task from "../model/Task.tsx";

const TaskView: React.FC = () => {
  const initialTasks: Task[] = [
    {
      id: 1,
      title: "Task 1",
      deadline: "2021-10-01",
      priority: "Urgent",
      isSelected: true,
      tags: ["tag1", "tag2"],
      tagsPossibles: ["tag1", "tag2", "tag3", "tag4"],
      description: "description 1",
    },
    {
      id: 2,
      title: "Task 2",
      deadline: "2021-10-02",
      priority: "Moyen",
      isSelected: false,
      tags: ["tag1", "tag2"],
      tagsPossibles: ["tag1", "tag2", "tag3", "tag4"],
      description: "description 2",
    },
    {
      id: 3,
      title: "Task 3",
      deadline: "2021-10-03",
      priority: "Faible",
      isSelected: false,
      tags: ["tag1", "tag2"],
      tagsPossibles: ["tag1", "tag2", "tag3", "tag4"],
      description: "description 3",
    },

  ];

  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [taskBeingEdited, setTaskBeingEdited] = React.useState<Task | null>(initialTasks[0]);

  const addValue = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    taskBeingEdited ? taskBeingEdited.isSelected = false : null;
    const newTask: Task = { id: tasks.length + 1, title: "Task", priority: "Moyen", deadline: currentDate, isSelected: true, description: "", tags: [], tagsPossibles: [] };
    setTasks([newTask, ...tasks]);
    setTaskBeingEdited(newTask)
  };

  const handleTaskClick = (task: Task) => {
    console.log(taskBeingEdited)
    taskBeingEdited ? taskBeingEdited.isSelected = false : null;
    task.isSelected = true;
    setTaskBeingEdited(task);
  };

  const handleTitleChange = (taskId: number, newTitle: string) => {
    console.log("je passe bien oui oui")
    setTasks((prevTasks) =>
        prevTasks.map((task) => {
              if (task.id === taskId) {
                task.title = newTitle;
                setTaskBeingEdited(task)
              }
              return task;
        }),
    );
  };
  const onDeadlineChange = (taskId: number, newDeadline: string) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === taskId) {
            task.deadline = newDeadline;
            setTaskBeingEdited(task)
          }
          return task;
        }),
    );
  };

  const onPriorityChange = (taskId: number, newPriority: string) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === taskId) {
            task.priority = newPriority;
            setTaskBeingEdited(task)
          }
          return task;
        }),
    );
  };

  const onDescriptionChange = (taskId: number, newDescription: string) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === taskId) {
            task.description = newDescription;
            setTaskBeingEdited(task)
          }
          return task;
        }),
    );
  };


  return (
      <div className="px-4 py-8 flex flex-row gap-4 justify-start w-full h-full">
        <div className="w-3/6 flex flex-col justify-between">
          <div className={"px-4 flex flex-col justify-start overflow-y-auto"}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    deadline={task.deadline}
                    priority={task.priority}
                    isSelected={task.isSelected}
                    onClick={() => handleTaskClick(task)}
                />
            ))}
          </div>
          <div className="mt-4 pl-4 pr-8 flex justify-center items-center w-full">
            <button className="w-full btn btn-neutral"
                    onClick={addValue}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                   className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>
            </button>
          </div>
        </div>
        <TaskEdit task={taskBeingEdited}
                  onTitleChange={handleTitleChange}
                  onDeadlineChange={onDeadlineChange}
                  onPriorityChange={onPriorityChange}
                  onDescriptionChange={onDescriptionChange}
                  description={taskBeingEdited ? taskBeingEdited.description : ""}>
        </TaskEdit>
      </div>
  );
};

export default TaskView;
