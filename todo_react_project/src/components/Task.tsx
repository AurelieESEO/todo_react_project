import React from "react";

type Props = {
    tache : string;
    id : string;
};
const Task: React.FC<Props> = (props:Props) => {
    return (
            <div className="card w-96 bg-base-100 shadow-xl gap-1 mb-4">
                <div className="card-body">
                    <div className="flex flex-row flex-start">
                        <button
                            className={`btn btn-sm btn-circle btn-outline mr-2`}>
                        </button>
                        <h2 className="card-title">{props.tache}</h2>
                    </div>
                    <p>Hello</p>
                    <div className="card-actions justify-end">
                        <div className="drawer drawer-end">
                            <input id={props.id} type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor={props.id} className="drawer-button btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor={props.id} aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li><a>{props.tache}</a></li>
                                    <li><a>Sidebar Item 2</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
        </div>

    );
}

export default Task;