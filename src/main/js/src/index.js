import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//import * as serviceWorker from './serviceWorker';
import { setConfig  } from 'react-hot-loader';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

setConfig({/* 동작하지않고잇음 */
    reloadHooks: true,
});

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')) 

//serviceWorker.unregister();