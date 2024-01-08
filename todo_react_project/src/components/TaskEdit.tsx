import React, {useEffect} from 'react';
import Task from '../model/Task.tsx';

type TaskEditProps = {
  task: Task | null;
  onTitleChange: (taskId: number, newTitle: string) => void;
  onDeadlineChange: (taskId: number, newDeadline: string) => void;
  onPriorityChange: (taskId: number, newDeadline: string) => void;
  onDescriptionChange: (taskId: number, newDescription: string) => void;
  description: string;
};

const TaskEdit: React.FC<TaskEditProps> = ({ task, onTitleChange, onDeadlineChange, onPriorityChange, onDescriptionChange}) => {
  const [editedTask, setEditedTask] = React.useState<Task>(task!);
  const prioritiesAvailable = ['Urgent', 'Moyen', 'Faible'];

  useEffect(() => {
    setEditedTask(task!);
  }, [task]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      title: value,
    }));

    if (task) {
      onTitleChange(task.id, value);
    }
  };

  const handleDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      deadline: value,
    }));

    if (task) {
      onDeadlineChange(task.id, value);
    }
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      priority: value,
    }));

    if (task) {
      onPriorityChange(task.id, value);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      description: value,
    }));

    if (task) {
      onDescriptionChange(task.id, value);
    }
  };


  return (
      <div className="h-full w-full card gap-1 border-primary border-2">
        <div className="card-body">
          <input
              className="input input-bordered card-title w-full max-w-xs"
              value={editedTask ? editedTask.title : 'Task'}
              name="title"
              type="text"
              onChange={handleTitleChange}
          />
          <div className="flex flex-column">
            <p>Deadline</p>
            <input
                className="bg-base-100"
                type="date"
                value={editedTask ? editedTask.deadline : new Date().toISOString().slice(0, 10)}
                name="deadline"
                onChange={handleDeadlineChange}
            />
          </div>
          <div className="flex flex-column">
            <p>Priority</p>
            <select
                className="select select-bordered w-full max-w-xs"
                value={editedTask ? editedTask.priority : 'Priority'}
                onChange={handlePriorityChange}
            >
              <option disabled>Select Priority</option>
              {prioritiesAvailable.map((priority, index) => (
                  <option key={index}>{priority}</option>
              ))}
            </select>
          </div>
          <textarea
              className="textarea textarea-bordered w-full h-32"
              placeholder="Description"
              value={editedTask ? editedTask.description : ''}
              onChange={handleDescriptionChange}
          />
        </div>
      </div>
  );
};

export default TaskEdit;
