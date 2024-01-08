import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import TaskView from "./components/TaskView.tsx";
import React from "react";

function App() {
  const [view, setView] = React.useState("Tasks List");


  return (
      <main data-theme="cupcake" className="h-screen w-screen bg-base-100 flex flex-row">
        <div>
          <Sidebar setView={setView} view={view}></Sidebar>
        </div>
        <div className={'w-full'}>
          {/*<h1 className="font-body font-title tracking-widest uppercase font-semibold text-2xl ">To-Do App</h1>*/}
          <TaskView view={view}></TaskView>
        </div>
      </main>
  )
}

export default App
