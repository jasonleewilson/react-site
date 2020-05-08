import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Aboutpage from './components/pages/aboutPage';
import Contactpage from './components/pages/contactPage';

// includes
import './assets/css/default.min.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route exact path='/react-site/' component={Homepage} />
        <Route exact path='/react-site/About' component={Aboutpage} />
        <Route exact path='/react-site/Contact' component={Contactpage} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
