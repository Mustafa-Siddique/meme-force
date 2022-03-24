import "./App.css";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Launchpad from "./components/Launchpad";
import Bottomnav from "./components/Bottomnav";
import Project from "./components/Project";
// import ProjectDetails from "./components/ProjectDetails";
// import Schedule from "./components/Schedule";
// import Allocation from "./components/Allocation";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
      <div className="App">
        <Loader />
        <Bottomnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/launchpad/:token/:symbol" element={<Project />} />
          <Route path="/launchpad/admin-panel" element={<AdminPanel />} />
          {/* <Route path="projectdetails" element={<ProjectDetails />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="allocation" element={<Allocation />} /> */}
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
