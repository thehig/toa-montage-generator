import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../../App.css';

import Input from '../organisms/Input';

import store from '../../redux/store';

class App extends Component {
  onMontageSubmit = evt => console.log(evt);

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Input onSubmit={this.onMontageSubmit} />
        </div>
      </Provider>
    );
  }
}

export default App;
