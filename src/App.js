import React from 'react';
//CSS files
import './styles/index.css';
import './styles/normalize.css';
import 'tachyons';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

import PeriodicTable from './components/PeriodicTable';
import Partciles from 'react-particles-js';
import particlesOptions from './components/particlesOptions';
document.title = 'Periodic Table of Elements';

function App() {
  return (
    <div className='wrapper'>
      <Partciles
            className="particles"
            params={particlesOptions}
          />
      <Header/>
      <PeriodicTable/>
      <Footer/>
    </div>
  );
}

export default App;
