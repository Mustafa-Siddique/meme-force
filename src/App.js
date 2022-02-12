import './App.css';
import Loader from './components/Loader';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

  return (
    <Router>
      <div className="App">
        <Loader/>
        <Navbar/>
        <Hero/>
      </div>
    </Router>
  );
}

export default App;
