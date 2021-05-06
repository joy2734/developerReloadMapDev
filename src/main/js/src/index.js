import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { setConfig  } from 'react-hot-loader';

setConfig({/* 동작하지않고잇음 */
    reloadHooks: false,
});

ReactDOM.render(<App/>, document.getElementById('app')) 