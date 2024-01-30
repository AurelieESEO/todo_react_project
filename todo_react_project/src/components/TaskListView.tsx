import React from "react";
import TaskItem from "./TaskItem.tsx";
import TaskEdit from "./TaskEdit.tsx";
import Task from "../model/Task.tsx";
import Tag from "../model/Tag.tsx";
import Filter from "../model/Filter.tsx";

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

    const initialFilter: Filter[] = []

    const [filters, setFilters] = React.useState<Filter[]>(initialFilter);
    const [filtersDisplayed, setFiltersDisplayed] = React.useState(false);

    const prioritiesAvailable = ['Urgent', 'High', 'Medium', 'Low'];
    const statusAvailable = ['Not Started', 'In Progress', 'In Waiting', 'Done'];

    const onFilterChange = (newFilters: Filter[]) => {
        console.log("Hiiiiii")
        console.log(newFilters)
        setFilters(newFilters);
    };

    const isTaskDisplayed = (task: Task) => {
        let isDisplayed = true;
        filters.forEach(filter => {
            switch (filter.property) {
                case "priority":
                    if(!(filter.value === task.priority)) {
                        isDisplayed = false;
                    }
                    break;
                case "status":
                    if(!(filter.value === task.status)) {
                        isDisplayed = false;
                    }
                    break;
                case "tag":
                    if(!(task.tags.map(tag => tag.text).includes(filter.value))) {
                        isDisplayed = false;
                    }
                    break;
            }
        });
        if(isDisplayed) {
            return <TaskItem
                task={task}
                onClick={() => handleTaskClick(task)}
                onIsDoneChange={onIsDoneChange}
            />
        }
    }

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        propertyName: string
    ) => {
        const {value} = event.target;
        if(value === "None") {
            onFilterChange(filters.filter(filter => filter.property !== propertyName));
            return;
        }
        else {
            const newFilter : Filter = {property: propertyName, value: value};
            let newFilters = filters;
            if(filters.map(filter => filter.property).includes(propertyName)) {
                newFilters = filters.filter(filter => filter.property !== propertyName);
            }
            newFilters = [...newFilters, newFilter];
            onFilterChange(newFilters);
        }

    };

    const handleFiltersDisplayed = () => {
        setFiltersDisplayed(!filtersDisplayed);
    }


  // TSX for the TaskListView component
  return (
      <div className="px-4 py-8 flex flex-row gap-4 justify-start w-full h-full">
        <div className="w-3/6 flex flex-col justify-between">
            <button className={'btn btn-secondary btn-sm mr-2'}
                    onClick={() => handleFiltersDisplayed()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                </svg>
            </button>
            <div className={`${filtersDisplayed ? 'hidden' : ''}`}>
                <p>Priority</p>
                <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(event: React.ChangeEvent<never>) =>
                        handleInputChange(event, 'priority')
                    }
                >
                    <option>None</option>
                    {prioritiesAvailable.map((priority, index) => (
                        <option key={index}>{priority}</option>
                    ))}
                </select>
                <p>Status</p>
                <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(event: React.ChangeEvent<never>) =>
                        handleInputChange(event, 'status')
                    }
                >
                    <option>None</option>
                    {statusAvailable.map((status, index) => (
                        <option key={index}>{status}</option>
                    ))}
                </select>
                <p>Tag</p>
                <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(event: React.ChangeEvent<never>) =>
                        handleInputChange(event, 'tag')
                    }
                >
                    <option>None</option>
                    {tagsPossibles.map((tag, index) => (
                        <option key={index}>{tag.text}</option>
                    ))}
                </select>
            </div>
            <div className={"px-4 flex flex-col justify-start overflow-y-auto"}>
                {/* Map over each task and render a TaskItem for each */}
                {tasks.map((task) => (
                    isTaskDisplayed(task)
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
