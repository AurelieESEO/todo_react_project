import React from "react";
import TaskItem from "./TaskItem.tsx";
import TaskEdit from "./TaskEdit.tsx";
import Task from "../model/Task.tsx";
import Tag from "../model/Tag.tsx";

// Define the props for TaskListView component
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
    onStatusChange: (taskId: number, newStatus: string) => void;
  onDescriptionChange: (taskId: number, newDescription: string) => void;
  onTagsPossibleChange: (newTagPossible: Tag) => void;
  onTagChange: (taskId: number, newTags: Tag[]) => void;
};

// TaskListView component
const TaskListView: React.FC<TaskListViewProps> = (
    { tagsPossibles, tasks, taskBeingEdited, addValue,
      handleTaskClick, onIsDoneChange, onTitleChange, onDeadlineChange,
      onPriorityChange, onStatusChange, onDescriptionChange, onTagsPossibleChange, onTagChange}) => {

  // TSX for the TaskListView component
  return (
      <div className="px-4 py-8 flex flex-row gap-4 justify-start w-full h-full">
        <div className="w-3/6 flex flex-col justify-between">
          <div className={"px-4 flex flex-col justify-start overflow-y-auto"}>
            {/* Map over each task and render a TaskItem for each */}
            {tasks.map((task) => (
                <TaskItem
                    task={task}
                    onClick={() => handleTaskClick(task)}
                    onIsDoneChange={onIsDoneChange}
                />
            ))}
          </div>
          <div className="mt-4 pl-4 pr-8 flex justify-center items-center w-full">
            {/* Button to add a new task */}
            <button className="w-full btn btn-neutral" onClick={addValue}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>
            </button>
          </div>
        </div>
        {/* Render TaskEdit component for editing the selected task */}
        <TaskEdit
            task={taskBeingEdited}
            onTitleChange={onTitleChange}
            onDeadlineChange={onDeadlineChange}
            onPriorityChange={onPriorityChange}
            onStatusChange={onStatusChange}
            onDescriptionChange={onDescriptionChange}
            tagsPossible={tagsPossibles}
            onTagsPossibleChange={onTagsPossibleChange}
            onTagsChange={onTagChange}
        />
      </div>
  );
};

export default TaskListView;
