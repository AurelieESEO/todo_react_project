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
		// Initial list of tags
    const initialTagsPossibles: Tag[] = [
    {text: "Cuisine", color: "#F87171"},
    {text: "Famille", color: "#FBBF24"},
    ]

	// List of tasks
  const [tagsPossibles, setTagsPossibles] = React.useState<Tag[]>(initialTagsPossibles);

	// List of tasks
  const initialTasks: Task[] = [
      {
        id: 1,
        title: "Faire le repas de Noël",
        deadline: "2023-12-25",
        priority: "Urgent",
        status: "Not Started",
        isSelected: true,
        isDone: false,
        tags: [tagsPossibles[0], tagsPossibles[1]],
        description: "Entrées : huitres, saumon fumé, foie gras\nPlat : dinde aux marrons\nDessert : bûche de Noël",
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
      status: "Not Started",
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

	// Handler function for the deadline change
  const onDeadlineChange = (taskId: number, newDeadline: string) => {
    updateTaskProperty(taskId, (task) => {
      task.deadline = newDeadline;
    });
  };

	// Handler function for the priority change
  const onPriorityChange = (taskId: number, newPriority: string) => {
    updateTaskProperty(taskId, (task) => {
      task.priority = newPriority;
    });
  };

	// Handler function for the status change
  const onStatusChange = (taskId: number, newStatus: string) => {
    updateTaskProperty(taskId, (task) => {
      task.status = newStatus;
    });
  }

	// Handler function for the description change
  const onDescriptionChange = (taskId: number, newDescription: string) => {
    updateTaskProperty(taskId, (task) => {
      task.description = newDescription;
    });
  };

	// Handler function for the isDone change
  const onIsDoneChange = (taskId: number) => {
    updateTaskProperty(taskId, (task) => {
      task.isDone = !task.isDone;
    });
  };

	// Handler function for the tag change
  const onTagChange = (taskId: number, newTags: Tag[]) => {
      setTasks((prevTasks) =>
          prevTasks.map((task) => {
          if (task.id === taskId) {
              task.tags = newTags;
              setTaskBeingEdited(task)
          }
          return task;
          }),
      );
    };

	// Handler function for the tag possible change
  const onTagsPossibleChange = (newTagPossible: Tag) => {
      setTagsPossibles([...tagsPossibles, newTagPossible]);
      console.log("helloooooo")
      console.log(tagsPossibles);
  };


  // Render the component based on the selected view
  const renderView = () => {
    switch (view) {
      case "Tasks List":
        return <TaskListView
            tasks={tasks}
            taskBeingEdited={taskBeingEdited}
            addValue={addValue}
            handleTaskClick={handleTaskClick}
            onIsDoneChange={onIsDoneChange}
            onTitleChange={onTitleChange}
            onDeadlineChange={onDeadlineChange}
            onPriorityChange={onPriorityChange}
            onStatusChange={onStatusChange}
            onDescriptionChange={onDescriptionChange}
            onTagChange={onTagChange}
            tagsPossibles={tagsPossibles}
            onTagsPossibleChange={onTagsPossibleChange}
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
