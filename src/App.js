import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="text-center text-xl font-bold mt-3">
        Hello React With <span className="text-blue-400">Tailwind CSS</span>
      </h2>
      <img src={logo} className="w-32 float-left" />
    </div>
  );
}

export default App;
