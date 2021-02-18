import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ParentComponet from "./components/parentComponet";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "./components/loginForm";
import MovieDetail from "./components/movieDetail";
import AddMovie from "./components/addMovie";
import About from "./components/aboutComp";
import Menu from "./components/menuComp";

function App() {
  return (
    <div className="container">
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={ParentComponet} />
          <Route path="/about" exact component={About} />
          <Route path="/addnew" exact component={AddMovie} />
          <Route path="/detail/:id" component={MovieDetail} />
          <Route path="/login/" exact component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
