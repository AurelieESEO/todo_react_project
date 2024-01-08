import {
	CalendarDaysIcon,
	CheckCircleIcon,
	ChevronLeftIcon, ChevronRightIcon,
	ViewColumnsIcon
} from "@heroicons/react/24/outline";
import React, {useState} from "react";
import SidebarItem from "./SidebarItem.tsx";

const Sidebar: React.FC = () => {
	const [short, setShort] = useState(false);

	const toggleShort = () => {
		setShort(!short);
	};

	const characteristics = [
		{icon: CheckCircleIcon, text: "Tasks List", active: true, short: short},
		{icon: ViewColumnsIcon, text: "Labels Board", active: false, short: short},
		{icon: CalendarDaysIcon, text: "Calendar Vue", active: false, short: short}
	];


	return (
		<aside className={`transition-all duration-200 h-screen ${short ? 'w-20' : 'w-64'}`}>
			<nav
				className={`bg-base-300/30 h-full flex flex-col border-accent-content shadow-sm`}>
				<div className={`p-4 pb-2 flex ${short ? 'justify-center' : 'justify-between'} items-center`}>
					{short ?
						null :
						<h1 className="font-title tracking-widest uppercase text-2xl whitespace-nowrap">
							To-Do App
						</h1>
					}
					<button onClick={toggleShort}
					        className={`btn btn-secondary btn-sm btn-circle flex justify-center items-left ${short ? 'pl-0.5' : 'pr-0.5'}`}>
						{short ? <ChevronRightIcon className="h-4 w-4"/> :
							<ChevronLeftIcon className="h-4 w-4"/>}
					</button>
				</div>
				<div className="h-full flex flex-col justify-between">
					<ul className="menu px-4 gap-2 mt-8">
						{/* Map over each characteristic and render a SidebarItem for each */}
						{characteristics.map((characteristic, index) => (
							<SidebarItem key={index} {...characteristic} />
						))}
					</ul>
					<div className="p-4 pt-2 flex justify-between items-center">
						{short ? null : <span className="text-sm font-semibold">Toggle Theme</span>}
						<input type="checkbox" value="synthwave"
						       className="toggle controller-theme"/>
					</div>
				</div>
			</nav>
		</aside>
	);
};

export default Sidebar;