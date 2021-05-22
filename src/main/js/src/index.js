import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//import * as serviceWorker from './serviceWorker';
import { setConfig  } from 'react-hot-loader';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import axios from 'axios';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';

axios.defaults.baseURL = getContextPath();

const sagaMiddleware = createSagaMiddleware();

setConfig({/* 동작하지않고잇음 */
    reloadHooks: true,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')) 

//serviceWorker.unregister();