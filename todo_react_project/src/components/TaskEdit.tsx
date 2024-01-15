import React, {useEffect} from 'react';
import Task from '../model/Task.tsx';
import Tag from '../model/Tag.tsx';

// Define the props for the TaskEdit component
type TaskEditProps = {
  task: Task | null;
  onTitleChange: (taskId: number, newTitle: string) => void;
  onDeadlineChange: (taskId: number, newDeadline: string) => void;
  onPriorityChange: (taskId: number, newDeadline: string) => void;
  onStatusChange: (taskId: number, newStatus: string) => void;
  onDescriptionChange: (taskId: number, newDescription: string) => void;
  tagsPossible: Tag[];
  onTagsChange: (taskId: number, newTags: Tag[]) => void;
  onTagsPossibleChange: (newTagPossible: Tag) => void;
};

// Handler function for input changes (title, deadline, priority, description)
const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propertyName: string,
    setEditedTask: React.Dispatch<React.SetStateAction<Task>>,
    task: Task | null,
    onChangeFunction: (taskId: number, value: string) => void
) => {
  const {value} = event.target;
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
                                             onStatusChange,
                                             onDescriptionChange,
                                             onTagsChange,
                                             tagsPossible,
                                             onTagsPossibleChange
                                           }) => {

  // Local state to hold the edited task
  const [editedTask, setEditedTask] = React.useState<Task>(task!);
  const prioritiesAvailable = ['Urgent', 'High', 'Medium', 'Low'];
  const statusAvailable = ['Not Started', 'In Progress', 'In Waiting', 'Done'];
  const [allTagsVisible, setAllTagsVisible] = React.useState(false);

  // Update the local state when the task prop changes
  useEffect(() => {
    setEditedTask(task!);
  }, [task]);
  const handleTagRemoving = (tagText: string) => {
    const newTags = task!.tags.filter((tag) => tag.text !== tagText);
    setEditedTask((prevTask) => ({
      ...prevTask,
      tags: newTags,
    }));

    if (task) {
      onTagsChange(task.id, newTags);
    }
  }

  const handleInputChangeTagVisible = () => {
    setAllTagsVisible(!allTagsVisible);
  }

  const handleTagAdding = (tagText: string) => {
    let notInTheList = true;
    task!.tags.map((tag) => {
      if (tag.text === tagText) {
        notInTheList = false;
      }
    })
    if (notInTheList) {
      const newTag = tagsPossible.filter((tag) => tag.text === tagText);
      setEditedTask((prevTask) => ({
        ...prevTask,
        tags: [...prevTask.tags, ...newTag],
      }));
      if (task) {
        onTagsChange(task.id, [...task.tags, ...newTag]);
      }
    }
  }

  const handleNewTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    if (value != '') {
      let notInTheList = true;
      tagsPossible.map((tag) => {
        if (tag.text === value) {
          notInTheList = false;
        }
      })
      if (notInTheList) {
        const newTag: Tag[] = [{text: value, color: "#000000"}];
        setEditedTask((prevTask) => ({
          ...prevTask,
          tags: [...prevTask.tags, ...newTag],
        }));
        onTagsPossibleChange(newTag[0]);
        if (task) {
          onTagsChange(task.id, [...task.tags, ...newTag]);
        }
      }
    }

  }

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
          {/* Dropdown for task status */}
          <div className="flex flex-column">
            <p>Status</p>
            <select
                className="select select-bordered w-full max-w-xs"
                value={editedTask ? editedTask.status : 'Status'}
                onChange={(event: React.ChangeEvent<never>) =>
                    handleInputChange(event, 'status', setEditedTask, task, onStatusChange)
                }
            >
              <option disabled>Select Status</option>
              {statusAvailable.map((status, index) => (
                  <option key={index}>{status}</option>
              ))}
            </select>
          </div>
          <div className={'flex flex-column'}>
            <p>Tags</p>
            <div className={'flex flex-row'}>
              {task!.tags.map((tag) => (
                  <button className={'btn btn-secondary btn-sm mr-2'}
                          onClick={() => handleTagRemoving(tag.text)}>
                    {tag.text}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
              ))}
              <button className={"btn btn-circle btn-primary btn-sm"}
                      onClick={handleInputChangeTagVisible}>
                {allTagsVisible ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>}
              </button>
            </div>
          </div>
          <div className={`${allTagsVisible ? '' : 'hidden'}`}>
            <div className={'flex flex-row'}>
              {tagsPossible.map((tag) => (
                  <button className={'btn btn-accent btn-sm mr-2'}
                          onClick={() => handleTagAdding(tag.text)}>
                    {tag.text}
                  </button>
              ))}
            </div>
            <div>
              <input onBlur={handleNewTag}></input>
            </div>
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
