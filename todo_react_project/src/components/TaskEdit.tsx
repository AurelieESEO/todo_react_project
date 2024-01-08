import React, {useEffect} from 'react';
import Task from '../model/Task.tsx';
import Tag from '../model/Tag.tsx';

type TaskEditProps = {
  task: Task | null;
  onTitleChange: (taskId: number, newTitle: string) => void;
  onDeadlineChange: (taskId: number, newDeadline: string) => void;
  onPriorityChange: (taskId: number, newDeadline: string) => void;
  onDescriptionChange: (taskId: number, newDescription: string) => void;
  onTagsChange: (taskId: number, newTags: Tag[]) => void;
  description: string;
  tagsPossible: Tag[];
  onTagsPossibleChange: (newTagPossible: Tag) => void;
};

const TaskEdit: React.FC<TaskEditProps> = ({ task, onTitleChange, onDeadlineChange, onPriorityChange, onDescriptionChange, onTagsChange, tagsPossible, onTagsPossibleChange}) => {
  const [editedTask, setEditedTask] = React.useState<Task>(task!);
  const prioritiesAvailable = ['Urgent', 'Moyen', 'Faible'];
  const [allTagsVisible, setAllTagsVisible] = React.useState(false);

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
        const { value } = event.target;
        if(value != '') {
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
          <div className={'flex flex-column'}>
            <p>Tags</p>
            <div className={'flex flex-row'}>
              {task!.tags.map((tag) => (
                  <button className={'btn btn-secondary btn-sm mr-2'} onClick={() => handleTagRemoving(tag.text)}>
                    {tag.text}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
              ))}
              <button className={"btn btn-circle btn-primary btn-sm"}
                      onClick={handleInputChangeTagVisible}>
                {allTagsVisible ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>}
              </button>
            </div>
          </div>
          <div className={`${allTagsVisible ? '' : 'hidden'}`}>
            <div className={'flex flex-row'}>
              {tagsPossible.map((tag) => (
                  <button className={'btn btn-accent btn-sm mr-2'} onClick={() => handleTagAdding(tag.text)}>
                    {tag.text}
                  </button>
              ))}
            </div>
            <div>
              <input onBlur={handleNewTag}></input>
            </div>
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
