import "./CSS/App.css";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

//https://youtu.be/rJjaqSTzOxI?t=9838

export default App;
