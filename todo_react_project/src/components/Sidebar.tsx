import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/20/solid";
import React from "react";
import SidebarItem from "./SidebarItem.tsx";

const Sidebar: React.FC = () => {
	const characteristics = [
		{ icon: HomeIcon, text: "Item 1", active: true, alert: false },
		{ icon: ChevronLeftIcon, text: "Item 2", active: false, alert: true },
		// Add more items as needed
	];

	return (
		<aside className="h-screen">
			<nav className="h-full w-60 flex flex-col bg-purple-100 border-r shadow-sm">
				<div className="p-4 pb-2 flex justify-between items-center">
					<h1 className="font-display uppercase italic font-bold text-3xl ">
						To-Do App
					</h1>
					<button className="p-1.5 rounded-lg bg-dark hover:bg-gray-100">
						<ChevronLeftIcon className="h-5 w-5 text-gray-500" />
					</button>
				</div>
				<ul className="flex-1 px-3">
					{/* Map over each characteristic and render a SidebarItem for each */}
					{characteristics.map((characteristic, index) => (
						<SidebarItem key={index} {...characteristic} />
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;