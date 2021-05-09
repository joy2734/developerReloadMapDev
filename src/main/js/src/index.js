import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { setConfig  } from 'react-hot-loader';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './store/reducers';

setConfig({/* 동작하지않고잇음 */
    reloadHooks: true,
});

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')) 