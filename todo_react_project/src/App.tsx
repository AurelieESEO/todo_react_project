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
					<button className="btn btn-neutral btn-circle flex flex-end">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
				</div>
			</div>

		</main>
  )
}

export default App
