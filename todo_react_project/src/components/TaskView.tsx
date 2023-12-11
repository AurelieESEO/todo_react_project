import React from "react";
import Task from "./Task.tsx";

const TaskView: React.FC = () => {
    const [tasksName, setTasksName] = React.useState(['Faire la vaiselle', 'Acheter du pain', 'Faire le sapin de Noël']);

    const addValue = () => {
        setTasksName([...tasksName, 'Task']);
    }

    return (
        <div>
        <div className="flex flex-col justify-between">
            {tasksName.map((taskName) => (
                <Task title={taskName}/>
            ))}
        </div>
        <button className="btn btn-neutral btn-circle flex flex-end" onClick={() => addValue()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        </button>
        </div>
    );
}

export default TaskView;