import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../../App.css';

import { MontagePage } from '../';

import store from '../../redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MontagePage />
        </div>
      </Provider>
    );
  }
}

export default App;