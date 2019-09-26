import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; //add reducer step 1
import { Provider } from 'react-redux'; //this provide store data to app 
import rootReducers from './reducers/rootReducer';

const store = createStore(rootReducers); //here we pass the reducer function into store

ReactDOM.render(<Provider store = { store }>
<App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
