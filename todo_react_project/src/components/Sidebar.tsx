import {
  CalendarDaysIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ViewColumnsIcon
} from "@heroicons/react/24/outline";
import React from "react";
import SidebarItem from "./SidebarItem.tsx";

const Sidebar: React.FC = () => {
  const characteristics = [
    {icon: CheckCircleIcon, text: "Tasks List", active: true},
    {icon: ViewColumnsIcon, text: "Labels Board", active: false},
    {icon: CalendarDaysIcon, text: "Calendar Vue", active: false}
    // Add more items as needed
  ];

  return (
      <aside className="h-screen">
        <nav className="h-full w-60 flex flex-col border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <h1 className="font-body uppercase font-semibold text-2xl ">
              To-Do App
            </h1>
            <button
                className="btn btn-primary btn-xs btn-circle flex justify-center items-left pr-0.5">
              <ChevronLeftIcon className="h-4 w-4"/>
            </button>
          </div>
          <div className="h-full flex flex-col justify-between">
            <ul className="menu flex flex-col px-3 gap-2 mt-8">
              {/* Map over each characteristic and render a SidebarItem for each */}
              {characteristics.map((characteristic, index) => (
                  <SidebarItem key={index} {...characteristic} />
              ))}
            </ul>
            <div className="p-4 pt-2 flex justify-between items-center">
              <span className="text-sm">Toggle Theme</span>
              <input type="checkbox" value="synthwave"
                     className="toggle controller-theme"/>
            </div>
          </div>
        </nav>
      </aside>
  );
};

export default Sidebar;