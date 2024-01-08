import React from "react";
import Task from "../model/Task.tsx";
import Tag from "../model/Tag.tsx";

type LabelsBoardViewProps = {
  tagsPossibles: Tag[];
  tasks: Task[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LabelsBoardView: React.FC<LabelsBoardViewProps> = ({tagsPossibles, tasks}) => {
  //const tagsPossibles = ["Cuisine", "Ménage", "Travail", "Famille",
  // "Finances"];

  console.log(tagsPossibles);
  console.log(tasks);

  return (
      <div className="flex flex-col w-full lg:flex-row">
        <div
            className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div
            className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content
        </div>
      </div>
  );
};

export default LabelsBoardView;
