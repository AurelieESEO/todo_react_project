import React from "react";

type Props = {
    title : string;
};
const Task: React.FC<Props> = (props:Props) => {
    const [detailsVisible, setDetailsVisible] = React.useState(true);
    const [title, setTitle] = React.useState(props.title);
    const [deadline, setDeadline] = React.useState('');
    const prioritiesAvailable = ['Urgent', 'Moyen', 'Faible'];
    const [priority, setPriority] = React.useState('');

    const handleClickButton = () => {
        setDetailsVisible(!detailsVisible);
    };

    const handleInputChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleInputChangeDeadline = (event) => {
        setDeadline(event.target.value);
    }

    const handleInputChangePriority = (event) => {
        setPriority(event.target.value);
    }

    return (
        <div className={'flex flex-column'}>
            <div className="card w-96 bg-base-100 shadow-xl gap-1 mb-4 mr-12">
                <div className="card-body">
                    <div className="flex flex-row flex-start">
                        <button
                            className={`btn btn-sm btn-circle btn-outline mr-2`}>
                        </button>
                        <h2 className="card-title">{title}</h2>
                    </div>
                    <div className={"flex flex-column"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <p>{deadline}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                        <p>{priority}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleClickButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            <div className={`card w-96 bg-base-100 shadow-xl gap-1 mb-4 ${detailsVisible ? 'hidden' : ''}`}>
                <div className="card-body">
                    <input className={"input card-title w-full max-w-xs"} value={title} type="text" onChange={handleInputChangeTitle}/>
                    <div className={'flex flex-column'}>
                        <p>Deadline</p>
                        <input type="date" value={deadline} onChange={handleInputChangeDeadline}/>
                    </div>
                    <div className={'flex flex-column'}>
                        <p>Priority</p>
                        <select className="select select-bordered w-full max-w-xs" onChange={handleInputChangePriority}>
                            <option disabled selected>Priority</option>
                            {prioritiesAvailable.map((priority, index) => (
                                <option key={index}>{priority}</option>
                            ))}
                        </select>
                    </div>
                    <textarea className={"textarea textarea-bordered w-full max-w-xs"} placeholder={"Description"}/>

                </div>
            </div>
        </div>


    );
}

export default Task;