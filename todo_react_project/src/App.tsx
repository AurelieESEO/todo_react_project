import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import Task from "./components/Task.tsx";

function App() {

  return (
		<main data-theme="pastel" className="h-full bg-base-100">
			<div className={'h-full flex flex-row'}>
				<Sidebar></Sidebar>
				<h1 className="flex align-items font-body font-title tracking-widest uppercase font-semibold text-2xl ">To-Do App</h1>
				<Task text="Faire les courses"/>
			</div>

		</main>
  )
}

export default App
