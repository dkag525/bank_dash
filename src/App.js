import "./App.css";
import LeftNavBar from "./components/Navbar/LeftNavBar/LeftNavBar";
import TopNavBar from "./components/Navbar/TopNavBar/TopNavBar";

function App() {
  return (
    <div className="App">
      <div className="layout-nav">
        <LeftNavBar />
        <TopNavBar />
      </div>
    </div>
  );
}

export default App;
