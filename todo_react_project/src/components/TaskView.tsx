import React from "react";

import TaskListView from "./TaskListView.tsx";
import LabelsBoardView from "./LabelsBoardView.tsx";
import Task from "../model/Task.tsx";
import Tag from "../model/Tag.tsx";
import CalendarView from "./ClandarView.tsx";

type TaskViewProps = {
  view: string;
};

const TaskView: React.FC<TaskViewProps> = ({ view }) => {
  // Definition of possible tags
  const tagsPossibles: Tag[] = [
    { text: "tag1", color: "#FF0000" },
    { text: "tag2", color: "#00FF00" },
    { text: "tag3", color: "#0000FF"},
    { text: "tag4", color: "#FFFF00" },
    { text: "tag5", color: "#00FFFF" },
    { text: "tag6", color: "#FF00FF" },
  ];

  // Initial tasks
  const initialTasks: Task[] = [
    {
      id: 1,
      title: "Prepare Christmas Dinner",
      deadline: "2023-12-25",
      priority: "Urgent",
      isSelected: true,
      isDone: false,
      tags: ["Cooking", "Family"],
      description: "Starters: oysters, smoked salmon, foie gras\nMain course: turkey with chestnuts\nDessert: Yule log",
    },
  ];

  // State for tasks and the task currently being edited
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [taskBeingEdited, setTaskBeingEdited] = React.useState<Task | null>(initialTasks[0]);

  // Add a new task
  const addValue = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    taskBeingEdited ? taskBeingEdited.isSelected = false : null;
    const newTask: Task = {
      id: tasks.length + 1,
      title: "Task",
      priority: "Medium",
      deadline: currentDate,
      isSelected: true,
      description: "",
      tags: [],
      isDone: false
    };
    setTasks([newTask, ...tasks]);
    console.log(tasks)
    setTaskBeingEdited(newTask);
  };

  // Handle click on a task
  const handleTaskClick = (task: Task) => {
    taskBeingEdited ? taskBeingEdited.isSelected = false : null;
    task.isSelected = true;
    setTaskBeingEdited(task);
    console.log(taskBeingEdited);
  };

  // Generic function to update a task property
  const updateTaskProperty = (
      taskId: number,
      updateFunction: (task: Task) => void
  ) => {
    setTasks((prevTasks: Task[]) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          updateFunction(task);
          setTaskBeingEdited(task);
        }
        return task;
      });
    });
  };

  // Specific functions to update task properties
  const onTitleChange = (taskId: number, newTitle: string) => {
    console.log("Successfully passed through");
    updateTaskProperty(taskId, (task) => {
      task.title = newTitle;
    });
  };

  const onDeadlineChange = (taskId: number, newDeadline: string) => {
    updateTaskProperty(taskId, (task) => {
      task.deadline = newDeadline;
    });
  };

  const onPriorityChange = (taskId: number, newPriority: string) => {
    updateTaskProperty(taskId, (task) => {
      task.priority = newPriority;
    });
  };

  const onDescriptionChange = (taskId: number, newDescription: string) => {
    updateTaskProperty(taskId, (task) => {
      task.description = newDescription;
    });
  };

  const onIsDoneChange = (taskId: number) => {
    updateTaskProperty(taskId, (task) => {
      task.isDone = !task.isDone;
    });
  };

  // Render the component based on the selected view
  const renderView = () => {
    switch (view) {
      case "Tasks List":
        return <TaskListView
            tagsPossibles={tagsPossibles}
            tasks={tasks}
            taskBeingEdited={taskBeingEdited}
            addValue={addValue}
            handleTaskClick={handleTaskClick}
            onIsDoneChange={onIsDoneChange}
            onTitleChange={onTitleChange}
            onDeadlineChange={onDeadlineChange}
            onPriorityChange={onPriorityChange}
            onDescriptionChange={onDescriptionChange}
        />;
      case "Labels Board":
        return <LabelsBoardView tagsPossibles={tagsPossibles} tasks={tasks}></LabelsBoardView>;
      default:
        return <CalendarView />;
    }
  };

  // Render the main component
  return <>{renderView()}</>;
};

export default TaskView;
