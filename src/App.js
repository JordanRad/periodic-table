import React, {useState} from 'react';
//CSS files
import './styles/index.css';
import './styles/normalize.css';
import 'tachyons';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

import PeriodicTable from './components/PeriodicTable';
document.title = 'Periodic Table of Elements';

function App() {
  return (
    <div>
      <Header/>
      <div className="mt5 mb5">
        <PeriodicTable/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
