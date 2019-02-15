import React, { Component } from 'react';
import Menu from './components/Menu'
import Content from './components/Content'
import Footer from './components/Footer'
import MapContainer from './components/Maps'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content />
      	<Footer />
      </div>
    );
  }
}

export default App;
