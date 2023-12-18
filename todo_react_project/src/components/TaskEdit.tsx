import React from "react";

const TaskEdit: React.FC = ({ taskDetails }) => {
  // const [taskBeingEdited, setTaskBeingEdited] = React.useState(false);
  //
  // const handleClickButton = () => {
  //   setTaskBeingEdited(!taskBeingEdited);
  // };

  return (
      // <div
      //     className={`card w-96 bg-base-100 shadow-xl gap-1 mb-4 ${detailsVisible ? 'hidden' : ''}`}>
      //   <div className="card-body">
      //     <input className={"input card-title w-full max-w-xs"} value={title}
      //            type="text" onChange={handleInputChangeTitle}/>
      //     <div className={'flex flex-column'}>
      //       <p>Deadline</p>
      //       <input type="date" value={deadline}
      //              onChange={handleInputChangeDeadline}/>
      //     </div>
      //     <div className={'flex flex-column'}>
      //       <p>Priority</p>
      //       <select className="select select-bordered w-full max-w-xs"
      //               onChange={handleInputChangePriority}>
      //         <option disabled selected>Priority</option>
      //         {prioritiesAvailable.map((priority, index) => (
      //             <option key={index}>{priority}</option>
      //         ))}
      //       </select>
      //     </div>
      //     <textarea className={"textarea textarea-bordered w-full max-w-xs"}
      //               placeholder={"Description"}/>
      //
      //   </div>
      // </div>

  <div className={`h-full card bg-base-100 shadow-xl gap-1`}>
    <div className="card-body">
      <input className={"input card-title w-full max-w-xs"}
             type="text"/>
      <div className={'flex flex-column'}>
        <p>Deadline</p>
        <input type="date"/>
      </div>
      <div className={'flex flex-column'}>
        <p>Priority</p>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Priority</option>
        </select>
      </div>
      <textarea className={"textarea textarea-bordered w-full h-32"}
                placeholder={"Description"}/>

    </div>
  </div>
)
}

export default TaskEdit;