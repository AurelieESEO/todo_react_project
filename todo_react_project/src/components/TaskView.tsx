import React from "react";
import Task from "./Task.tsx";

const TaskView: React.FC = () => {
    return (
        <div className="flex flex-col justify-between">
            <Task tache={"Faire la vaiselle"} id={"my-drawer-1"}/>
            <Task tache={"Acheter du pain"} id={"my-drawer-2"}/>
            <Task tache={"Faire le sapin de Noël"} id={"my-drawer-3"}/>
        </div>
    );
}

export default TaskView;