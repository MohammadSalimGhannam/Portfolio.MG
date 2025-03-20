import Header from './components/Header/Header';
import './App.css';

import Global from './containers/Global/Global';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import RetyrnHome from './components/Section.Components/ReturnHome'


function App() {
  return (
    <div className="App">
      <Global>
        <Header />
        <Home/>
        <About/>
        <Experience/>
        <Contact/>
        <RetyrnHome/>
      </Global>
    </div>
  );
}

export default App;