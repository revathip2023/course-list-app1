import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import { Link } from "react-router-dom";
import Enquire from "./components/Enquire";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Link to="/Courses" className="nav-link">Courses</Link>
      <Routes>
        <Route exact path="/Courses" Component={Courses}></Route>
        <Route exact path="/Enquire" Component={Enquire}></Route>
        <Route exact path="/Users" Component={Users}></Route>
      </Routes>
    </div>
  );
}

export default App;
