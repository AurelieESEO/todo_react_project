import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import TaskView from "./components/TaskView.tsx";

function App() {

  return (
		<main data-theme="pastel" className="h-full bg-base-100">
			<div className={'h-full flex flex-row'}>
				<Sidebar></Sidebar>
				<div className="flex flex-col">
					<h1 className="font-body font-title tracking-widest uppercase font-semibold text-2xl ">To-Do App</h1>
					<TaskView></TaskView>

				</div>
			</div>

		</main>
  )
}

export default App
