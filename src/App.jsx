import Header from './components/Header/Header';
import './App.css';

import Global from './containers/Global.jsx/Global';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Global>
        <Header />
        <Home/>
        <About/>
        <Contact/>
        {/* <Title title='Experiences'/>
        <Title title='Contact'/> */}
        {/* <div className='wavyLine'></div> */}
      </Global>
    </div>
  );
}

export default App;