import React, { Component } from 'react';
import './resources/styles.css';

import Header from './component/header_footer/Header';
import Features from './component/features'
import VenueNfo from './component/vanueNfo'
import Highlight from './component/Highlight'
import Pricing from './component/pricing'
import Footer from './component/header_footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px",background: "#fff"}}>
       <Header />
       <Features />
       <VenueNfo />
       <Highlight />
       <Pricing />
       <Footer />
      </div>
    );
  }
}

export default App;
