# Redux-worker-middleware

## Install
npm i --save redux-worker-middleware

## Usage
В точке входа в ваше приложение:
```javascript
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
// Добавили
import WorkerMiddleware, { reducer } from 'redux-webworker-middleware';

// Первым аргументом передаем редюсер из redux-worker-middleware
let store = createStore(reducer, applyMiddleware(
    // Передаем URL веб-воркера
    WorkerMiddleware('/js/worker-reducer.js')
));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#app')
); 
``` 
worker-reducer.js
```javascript
import { CreateWorker } from 'redux-webworker-middleware';
// Ваша функция-редюсер
import ReducersController from './reducers';

CreateWorker(ReducersController);
```
