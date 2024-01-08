import React from "react";
import TaskItem from "./TaskItem.tsx";
import TaskEdit from "./TaskEdit.tsx";
import Task from "../model/Task.tsx";
import Tag from "../model/Tag.tsx";

type TaskListViewProps = {
  tagsPossibles: Tag[];
  tasks: Task[];
  taskBeingEdited: Task | null;
  addValue: () => void;
  handleTaskClick: (task: Task) => void;
  onIsDoneChange: (taskId: number) => void;
  onTitleChange: (taskId: number, newTitle: string) => void;
  onDeadlineChange: (taskId: number, newDeadline: string) => void;
  onPriorityChange: (taskId: number, newDeadline: string) => void;
  onDescriptionChange: (taskId: number, newDescription: string) => void;
};

const TaskListView: React.FC<TaskListViewProps> = (
    {tagsPossibles, tasks, taskBeingEdited, addValue, handleTaskClick, onIsDoneChange,
      onTitleChange, onDeadlineChange, onPriorityChange, onDescriptionChange }) => {
  //const tagsPossibles = ["Cuisine", "Ménage", "Travail", "Famille",
  // "Finances"];

  console.log(tagsPossibles);

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
            description={taskBeingEdited ? taskBeingEdited.description : ""}
        />
      </div>
  );
};

export default TaskListView;
