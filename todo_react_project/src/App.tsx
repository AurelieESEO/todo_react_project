import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import TaskView from "./components/TaskView.tsx";

function App() {

  return (
      <main data-theme="pastel" className="h-screen w-screen bg-base-100 flex flex-row">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className={'w-full'}>
          {/*<h1 className="font-body font-title tracking-widest uppercase font-semibold text-2xl ">To-Do App</h1>*/}
          <TaskView></TaskView>
        </div>
      </main>
  )
}

export default App
