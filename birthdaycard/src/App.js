import './App.css';
import Home from './components/home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllWishes from './components/allWishes';

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/all-wishes">
                <AllWishes />
            </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
