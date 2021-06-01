import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddList from "./components/AddList";
function App() {
  return (
    <Router>
      <div className="App w-full mt-5">
        <div className="mx-10">
          <h2 className="text-2xl font-bold text-center">My website for Todo Lists</h2>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <AddList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
