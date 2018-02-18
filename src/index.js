import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/atomic/environment/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
