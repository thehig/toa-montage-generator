import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from '../../logo.svg';
import '../../App.css';

import Input from '../organisms/Input';

import store from '../../redux/store';

class App extends Component {
  onMontageSubmit = evt => console.log(evt);

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Input onSubmit={this.onMontageSubmit} />
        </div>
      </Provider>
    );
  }
}

export default App;
