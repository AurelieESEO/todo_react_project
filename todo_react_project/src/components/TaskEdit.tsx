import React from 'react';
import Task from '../model/Task.tsx';

type TaskEditProps = {
  task: Task | null;
};

const TaskEdit: React.FC<TaskEditProps> = ({ task }) => {
  const prioritiesAvailable = ['Urgent', 'Moyen', 'Faible'];

  return (
      <div className="h-full w-full card gap-1 bg-base-200 drop-shadow-lg border-2">
        <div className="card-body">
          <input
              className="input card-title w-full max-w-xs"
              value={task ? task.title : 'Task'}
              name="title"
              type="text"
              // onChange={handleInputChange}
          />
          <div className="flex flex-column">
            <p>Deadline</p>
            <input
                type="date"
                value={task ? task.deadline : new Date().toISOString().slice(0, 10)}
                name="deadline"
                // onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-column">
            <p>Priority</p>
            <select
                className="select select-bordered w-full max-w-xs"
                value={task ? task.priority : 'Priority'}
                // onChange={handleSelectChange}
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
          />
        </div>
      </div>
  );
};

export default TaskEdit;
