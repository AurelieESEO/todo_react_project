import React from "react";
import Task from "../model/Task.tsx";

type TaskItemProps = {
  task: Task;
  onClick: () => void;
  onIsDoneChange: (taskId: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onClick, onIsDoneChange}) => {
  const handleBackgroundColor = () => {
    if (task.isDone && task.isSelected) {
      return 'bg-secondary/50'
    } else if (task.isDone) {
      return 'bg-secondary/20'
    } else if (task.isSelected) {
      return 'bg-primary'
    } else {
      return 'bg-primary/40'
    }
  }

  const handleIsDonePressed = () => {
    onIsDoneChange(task.id);
  }

  return (
      <div className="flex flex-column card w-full gap-1 mb-4">
        <div
            className={`transition-all duration-150 card-body rounded-box 
              ${handleBackgroundColor()}
              hover:cursor-pointer
              active:${task.isDone ? 'bg-secondary' : 'bg-primary/100'}`}
            onClick={onClick}
        >
          <div className="flex flex-row flex-start items-center">
            {/*<input type="checkbox" checked="0" className="checkbox checkbox-neutral checkbox-sm mr-2"/>*/}
            <button className={`btn btn-xs btn-circle mr-2 ${task.isDone ? 'btn-secondary' : 'btn-outline'}`}
                    onClick={handleIsDonePressed}>
            </button>
            <h2 className={`card-title ${task.isDone ? 'line-through' : ''}`}>{task.title}</h2>
          </div>
          <div className={"flex flex-column"}>
            <div className={"w-full flex justify-between"}>
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
          </div>
          <div className={'flex flex-row'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/>
            </svg>
            {task.tags.map((tag) => (
                <div className={'badge badge-secondary mr-2'}>{tag.text}</div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default TaskItem;
