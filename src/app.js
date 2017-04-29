import React, { Component } from 'react';
import Result from './components/result/result.js';
import Tabs from './components/tabs/tabs.js';

class App extends Component {
  render() {
    return (
      <div>
        <Result />

        <Tabs />
      </div>
    );
  }
}

export default App;
