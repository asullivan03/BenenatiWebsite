import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.component';
import IntakeForm from './Components/IntakeForm.component';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IntakeForm />
      </div>
    );
  }
}

export default App;
