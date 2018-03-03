import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../../App.css';

import { MontageForm } from '../';

import store from '../../redux/store';

const initialValues = {
  advantage: false,
  disadvantage: false,
  modifier: +6,
  pace: "normal",
  speed: "walk",
  navigationDC: 15,
  encounterDC: 19,
  numdays: 1,
  // lost: false,
  // daysoffset: 0
};

class App extends Component {
  onMontageSubmit = evt => console.log(evt);

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MontageForm onSubmit={this.onMontageSubmit} initialValues={initialValues} />
        </div>
      </Provider>
    );
  }
}

export default App;
