import React from "react";
import Task from "../model/Task.tsx";

// Define the props for the TaskItem component
type TaskItemProps = {
  task: Task;
  onClick?: () => void;
  onIsDoneChange?: (taskId: number) => void;
  isInStatusBoard?: boolean;
  onDragDrop?: (taskId: number) => void;
  onDragStart?: (taskId: number) => void;
};

// TaskItem component for a single task
const TaskItem: React.FC<TaskItemProps> = ({
                                             task,
                                             onClick,
                                             onIsDoneChange,
                                             isInStatusBoard,
                                             onDragDrop,
                                              onDragStart
                                           }) => {

	// Handler function for the background color
	const handleBackgroundColor = () => {
    if (isInStatusBoard) {
      switch (task.status) {
        case "Not Started":
          return "bg-secondary/50";
        case "In Waiting":
          return "bg-accent/50";
        case "In Progress":
          return "bg-primary/50";
        case "Done":
          return "bg-success/50";
        default:
          return "bg-primary/40";
      }
    } else if (task.isDone && task.isSelected) {
      return 'bg-secondary/50';
    } else if (task.isDone) {
      return 'bg-secondary/20';
    } else if (task.isSelected) {
      return 'bg-primary';
    } else {
      return 'bg-primary/40';
    }
  };

	// Handler functions for the drag and drop
	// Handler function for the drag start event
  const handleOnDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', task.id.toString());
    if (onDragStart) {
      onDragStart(task.id);
    }
  };

	// Handler function for the drag over event
  const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

	// Handler function for the drop event
  const handleOnDrop = () => {
    if (onDragDrop) {
      onDragDrop(task.id);
    }
  };

	// Handler function for the isDone button
  const handleIsDonePressed = () => {
    if (onIsDoneChange) {
      onIsDoneChange(task.id);
    }
  };

  return (
      <div className="flex flex-column card w-full gap-1 ">
        <div
            className={`transition-all duration-150 card w-full gap-1 mb-4 p-4
        ${handleBackgroundColor()}
        ${isInStatusBoard ? ' hover:cursor-grab' : 'hover:cursor-pointer' + ' draggable'}
        active:${task.isDone ? 'bg-secondary' : 'bg-primary/100'}`}
            onClick={onClick}
            onDragStart={handleOnDragStart}
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
            draggable={isInStatusBoard}
            style={{ userSelect: 'none' }}

        >
          <div className="flex flex-row flex-start items-center">
            {!isInStatusBoard &&
              <button
                className={`btn btn-xs btn-circle mr-2 ${task.isDone ? 'btn-secondary' : 'btn-outline'}`}
                onClick={handleIsDonePressed}>
              </button>
            }
            <h2 className={`card-title ${task.isDone ? 'line-through' : ''}`}>{task.title}</h2>
          </div>
          <div className={"w-full flex justify-between gap-4"}>
            <div className={"flex gap-1"}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                ></path>
              </svg>
              <p>{task.deadline}</p>
            </div>
            <div className={"flex gap-1"}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                ></path>
              </svg>
              <p>{task.priority}</p>
            </div>
          </div>
          <div className={"w-full"}>
            {!isInStatusBoard &&
              <div className={"flex gap-1"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <p>{task.status}</p>
              </div>
            }
          </div>
          <div className={'flex flex-row gap-2'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6z"/>
            </svg>
            {task.tags.length === 0 ? 'No tags' : task.tags.map((tag) => (
                <div className={'badge badge-secondary'}>{tag.text}</div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default TaskItem;
