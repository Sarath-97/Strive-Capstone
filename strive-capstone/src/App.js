import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './Components/MyNavbar.jsx'
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
      </div>
      <Route path="/Home" exact component={Home} />
      <Route path="/Projects" component={Projects} />
    </Router>
  );
}

export default App;
