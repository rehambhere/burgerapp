import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Layout>
      <BurgerBuilder/>
    </Layout>
      </div>
    );
  }
}

export default App;
