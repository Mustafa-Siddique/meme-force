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
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
const axios = require('axios');

function App() {
  const [price, setPrice] = useState(0)

  useEffect(()=>{
    axios.get('https://api.pancakeswap.info/api/v2/tokens/0xa97b64afbb6d6811696caafd323ffc9ea983a7bb')
    .then(function (response) {
      
      setPrice(response.data.data.price)
    })
    .catch(function (error) {
      
      
    })
  },)
  console.log("price data",Number(price).toFixed(10))
  return (
    <Router>
      <div className="App">
        <Loader />
        <Bottomnav />
        <Routes>
          <Route path="/" element={<Home price={Number(price).toFixed(10)} />} />
          <Route path="/launchpad" element={<Launchpad price={Number(price).toFixed(10)}/>} />
          <Route path="/launchpad/:token/:symbol" element={<Project price={Number(price).toFixed(10)}/>} />
          <Route path="/launchpad/admin-panel" element={<AdminPanel price={Number(price).toFixed(10)}/>} />
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
