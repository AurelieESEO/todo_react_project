import React from "react";
import TaskItem from "./TaskItem.tsx";
import TaskEdit from "./TaskEdit.tsx";
import Task from "../model/Task.tsx";
import Tag from "../model/Tag.tsx";

const TaskView: React.FC = () => {

    const initialTagsPossibles: Tag[] = [
    {text: "Cuisine", color: "#F87171"},
    {text: "Famille", color: "#FBBF24"},
    ]

  const [tagsPossibles, setTagsPossibles] = React.useState<Tag[]>(initialTagsPossibles);

    const initialTasks: Task[] = [
        {
            id: 1,
            title: "Faire le repas de Noël",
            deadline: "2023-12-25",
            priority: "Urgent",
            isSelected: true,
            isDone: false,
            tags: [tagsPossibles[0]],
            description: "Entrées : huitres, saumon fumé, foie gras\nPlat : dinde aux marrons\nDessert : bûche de Noël",
        },
    ];

    const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
    const [taskBeingEdited, setTaskBeingEdited] = React.useState<Task | null>(initialTasks[0]);

    const addValue = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    taskBeingEdited ? taskBeingEdited.isSelected = false : null;
    const newTask: Task = {
      id: tasks.length + 1,
      title: "Task",
      priority: "Moyen",
      deadline: currentDate,
      isSelected: true,
      description: "",
      tags: [],
      isDone: false
    };
    setTasks([newTask, ...tasks]);
    console.log(tasks)
    setTaskBeingEdited(newTask);
  };

  const handleTaskClick = (task: Task) => {
    taskBeingEdited ? taskBeingEdited.isSelected = false : null;
    task.isSelected = true;
    setTaskBeingEdited(task);
    console.log(taskBeingEdited);
  };

  const onTitleChange = (taskId: number, newTitle: string) => {
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

  const onIsDoneChange = (taskId: number) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === taskId) {
            task.isDone = !task.isDone;
          }
          return task;
        }),
    );
  };

    const onTagChange = (taskId: number, newTags: Tag[]) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
            if (task.id === taskId) {
                task.tags = newTags;
                setTaskBeingEdited(task)
            }
            return task;
            }),
        );
    };

    const onTagsPossibleChange = (newTagPossible: Tag) => {
        setTagsPossibles([...tagsPossibles, newTagPossible]);
        console.log("helloooooo")
        console.log(tagsPossibles);
    };

  return (
      <div
          className="px-4 py-8 flex flex-row gap-4 justify-start w-full h-full">
        <div className="w-3/6 flex flex-col justify-between">
          <div className={"px-4 flex flex-col justify-start overflow-y-auto"}>
            {tasks.map((task) => (
                <TaskItem
                    task={task}
                    onClick={() => handleTaskClick(task)}
                    onIsDoneChange={onIsDoneChange}
                />
            ))}
          </div>
          <div
              className="mt-4 pl-4 pr-8 flex justify-center items-center w-full">
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
        <TaskEdit
            task={taskBeingEdited}
            onTitleChange={onTitleChange}
            onDeadlineChange={onDeadlineChange}
            onPriorityChange={onPriorityChange}
            onDescriptionChange={onDescriptionChange}
            onTagsChange={onTagChange}
            description={taskBeingEdited ? taskBeingEdited.description : ""}
            tagsPossible={tagsPossibles}
            onTagsPossibleChange={onTagsPossibleChange}
        />
      </div>
  );
};

export default TaskView;
