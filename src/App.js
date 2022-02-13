import './App.css';
import Loader from './components/Loader';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Keyfeatures from './components/Keyfeatures';
import Memeforce from './components/Memeforce';
import Tokenomics from './components/Tokenomics';
import About from './components/About';
import Roadmap from './components/Roadmap';
import BSCtutorial from './components/BSCtutorial';
import ETHtutorial from './components/ETHtutorial';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Loader/>
        <Navbar/>
        <Hero/>
        <Keyfeatures/>
        <Memeforce/>
        <Tokenomics/>
        <About/>
        <Roadmap/>
        <BSCtutorial/>
        <ETHtutorial/>
        <ComingSoon/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
