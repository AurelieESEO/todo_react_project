// Importing the styles for the App component
import './App.css';

// Importing the Sidebar and TaskView components
import Sidebar from "./components/Sidebar.tsx";
import TaskView from "./components/TaskView.tsx";

// Importing React for JSX and state management
import React from "react";

// App component definition
function App() {
  // State to manage the current view in the TaskView
  const [view, setView] = React.useState("Tasks List");

  // TSX for the main App component
  return (
      // Main container with the 'cupcake' theme class and flex layout
      <main data-theme="cupcake" className="h-screen w-screen bg-base-100 flex flex-row">
        {/* Sidebar component for navigation */}
        <div>
          <Sidebar setView={setView} view={view}></Sidebar>
        </div>
        <div className={'w-full'}>
          {/* TaskView component with the current view passed as a prop */}
          <TaskView view={view}></TaskView>
        </div>
      </main>
  );
}

// Exporting the App component as the default export
export default App;
