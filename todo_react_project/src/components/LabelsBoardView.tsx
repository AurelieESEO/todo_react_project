import React, { useState } from "react";
import Task from "../model/Task.tsx";
import Tag from "../model/Tag.tsx";
import TaskItem from "./TaskItem.tsx";

type LabelsBoardViewProps = {
  tagsPossibles: Tag[];
  tasks: Task[];
};

// Kanban board component
const LabelsBoardView: React.FC<LabelsBoardViewProps> = ({tasks }) => {
  const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);

  const handleDragDrop = (draggedTaskId: number | null, newStatus: string) => {
    console.log(draggedTaskId);
    console.log(`Task ${draggedTaskId} dropped into ${newStatus} column`);
    tasks.map((task) => {
      if (task.id === draggedTaskId) {
        task.status = newStatus;
      }
    });
  };

  return (
      <div className="p-4 flex flex-col gap-4 w-full h-full lg:flex-row">
        <div
            className="flex-grow p-4 h-full card bg-secondary/20 overflow-y-auto"
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={() => {
              handleDragDrop(draggedTaskId, 'Not Started');
              setDraggedTaskId(null);
            }}
        >
          Not Started
          {tasks.map((task) => (
              task.status === "Not Started" && (
                  <TaskItem
                      key={task.id}
                      task={task}
                      isInStatusBoard={true}
                      onDragStart={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                      onDragDrop={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                  />
              )
          ))}
        </div>
        <div
            className="flex-grow p-4 h-full card bg-accent/20 overflow-y-auto"
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={() => {
              handleDragDrop(draggedTaskId, 'In Waiting');
              setDraggedTaskId(null);
            }}
        >
          In Waiting
          {tasks.map((task) => (
              task.status === "In Waiting" && (
                  <TaskItem
                      key={task.id}
                      task={task}
                      isInStatusBoard={true}
                      onDragStart={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                      onDragDrop={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                  />
              )
          ))}
        </div>
        <div
            className="flex-grow p-4 h-full card bg-primary/20 overflow-y-auto"
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={() => {
              handleDragDrop(draggedTaskId, 'In Progress');
              setDraggedTaskId(null);
            }}
        >
          In Progress
          {tasks.map((task) => (
              task.status === "In Progress" && (
                  <TaskItem
                      key={task.id}
                      task={task}
                      isInStatusBoard={true}
                      onDragStart={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                      onDragDrop={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                  />
              )
          ))}
        </div>
        <div
            className="flex-grow p-4 h-full card bg-success/20 overflow-y-auto"
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={() => {
              handleDragDrop(draggedTaskId, 'Done');
              setDraggedTaskId(null);
            }}
        >
          Done
          {tasks.map((task) => (
              task.status === "Done" && (
                  <TaskItem
                      key={task.id}
                      task={task}
                      isInStatusBoard={true}
                      onDragStart={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                      onDragDrop={(taskId) => {
                        setDraggedTaskId(taskId);
                      }}
                  />
              )
          ))}
        </div>
      </div>
  );
};

export default LabelsBoardView;
