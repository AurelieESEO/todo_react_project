import React, { useEffect } from 'react';
import Task from '../model/Task.tsx';

// Define the props for the TaskEdit component
type TaskEditProps = {
  task: Task | null;
  onTitleChange: (taskId: number, newTitle: string) => void;
  onDeadlineChange: (taskId: number, newDeadline: string) => void;
  onPriorityChange: (taskId: number, newDeadline: string) => void;
  onDescriptionChange: (taskId: number, newDescription: string) => void;
};

// List of available priorities
const prioritiesAvailable = ['Urgent', 'Moyen', 'Faible'];

// Handler function for input changes (title, deadline, priority, description)
const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propertyName: string,
    setEditedTask: React.Dispatch<React.SetStateAction<Task>>,
    task: Task | null,
    onChangeFunction: (taskId: number, value: string) => void
) => {
  const { value } = event.target;
  // Update the local state for the edited task
  setEditedTask((prevTask) => ({
    ...prevTask,
    [propertyName]: value,
  }));

  // Call the respective prop function to update the parent component state
  if (task) {
    onChangeFunction(task.id, value);
  }
};

// TaskEdit component definition
const TaskEdit: React.FC<TaskEditProps> = ({
                                             task,
                                             onTitleChange,
                                             onDeadlineChange,
                                             onPriorityChange,
                                             onDescriptionChange,
                                           }) => {
  // Local state to hold the edited task
  const [editedTask, setEditedTask] = React.useState<Task>(task!);

  // Update the local state when the task prop changes
  useEffect(() => {
    setEditedTask(task!);
  }, [task]);

  // TSX for the TaskEdit component
  return (
      <div className="h-full w-full card gap-1 border-primary border-2">
        <div className="card-body">
          {/* Input for task title */}
          <input
              className="input input-bordered card-title w-full max-w-xs"
              value={editedTask ? editedTask.title : 'Task'}
              name="title"
              type="text"
              onChange={(event) =>
                  handleInputChange(event, 'title', setEditedTask, task, onTitleChange)
              }
          />
          {/* Input for task deadline */}
          <div className="flex flex-column">
            <p>Deadline</p>
            <input
                className="bg-base-100"
                type="date"
                value={editedTask ? editedTask.deadline : new Date().toISOString().slice(0, 10)}
                name="deadline"
                onChange={(event) =>
                    handleInputChange(event, 'deadline', setEditedTask, task, onDeadlineChange)
                }
            />
          </div>
          {/* Dropdown for task priority */}
          <div className="flex flex-column">
            <p>Priority</p>
            <select
                className="select select-bordered w-full max-w-xs"
                value={editedTask ? editedTask.priority : 'Priority'}
                onChange={(event: React.ChangeEvent<never>) =>
                    handleInputChange(event, 'priority', setEditedTask, task, onPriorityChange)
                }
            >
              <option disabled>Select Priority</option>
              {prioritiesAvailable.map((priority, index) => (
                  <option key={index}>{priority}</option>
              ))}
            </select>
          </div>
          {/* Textarea for task description */}
          <textarea
              className="textarea textarea-bordered w-full h-32"
              placeholder="Description"
              value={editedTask ? editedTask.description : ''}
              onChange={(event) =>
                  handleInputChange(event, 'description', setEditedTask, task, onDescriptionChange)
              }
          />
        </div>
      </div>
  );
};

export default TaskEdit;
