import './App.css';
import Loader from './components/Loader';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Launchpad from './components/Launchpad';

function App() {

  return (
    <Router>
      <div className="App">
        <Loader/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/launchpad' element={<Launchpad/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
