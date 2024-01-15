import React, { useState } from "react";
import SidebarItem from "./SidebarItem.tsx";

import {
	CalendarDaysIcon,
	CheckCircleIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ViewColumnsIcon
} from "@heroicons/react/24/outline";

type SideBarProps = {
	setView: (view: string) => void;
	view: string;
};

interface Characteristic {
	icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>;
	text: string;
}

const Sidebar: React.FC<SideBarProps> = ({ setView, view }) => {
	const [short, setShort] = useState(false);

	// State to manage characteristics with icons and text
	const [characteristics, setCharacteristics] = useState<Characteristic[]>([
		{ icon: CheckCircleIcon, text: "Tasks List" },
		{ icon: ViewColumnsIcon, text: "Labels Board" },
		{ icon: CalendarDaysIcon, text: "Calendar Vue" }
	]);

	// Toggle the sidebar between short and regular length
	const toggleShort = () => {
		setShort(!short);
	};

	// Set the current view and update the characteristics with active status
	const setCurrentView = (view: string) => {
		setView(view);
		setCharacteristics((prevCharacteristics) =>
				prevCharacteristics.map((characteristic) => ({
					...characteristic,
					active: characteristic.text === view
				}))
		);
	};

	// TSX for the SideBar component
	return (
			<aside className={`transition-all duration-200 h-screen ${short ? 'w-20' : 'w-64'}`}>
				<nav className={`bg-base-300/30 h-full flex flex-col border-accent-content shadow-sm`}>
					<div className={`p-4 pb-2 flex ${short ? 'justify-center' : 'justify-between'} items-center`}>
						{short ? null : <h1 className="font-title tracking-widest uppercase text-2xl whitespace-nowrap">To-Do App</h1>}
						<button onClick={toggleShort} className={`btn btn-secondary btn-sm btn-circle flex justify-center items-left ${short ? 'pl-0.5' : 'pr-0.5'}`}>
							{short ? <ChevronRightIcon className="h-4 w-4" /> : <ChevronLeftIcon className="h-4 w-4" />}
						</button>
					</div>
					<div className="h-full flex flex-col justify-between">
						<ul className="menu px-4 gap-2 mt-8">
							{/* Map over each characteristic and render a SidebarItem for each */}
							{characteristics.map((characteristic, index) => (
									<SidebarItem
											setView={setCurrentView}
											key={index}
											text={characteristic.text}
											icon={characteristic.icon}
											active={characteristic.text === view}
											short={short}
									/>
							))}
						</ul>
						<div className="p-4 pt-2 flex justify-between items-center">
							{short ? null : <span className="text-sm font-semibold">Toggle Theme</span>}
							<input type="checkbox" value="synthwave" className="toggle controller-theme" />
						</div>
					</div>
				</nav>
			</aside>
	);
};

export default Sidebar;
