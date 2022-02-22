import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import comicsReducer from './reducers/comicsReducer'
import { combineReducers } from "redux";
 

//Vanilla Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

 

const rootReducer = combineReducers({
  comics: comicsReducer   
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


 

 

ReactDOM.render(
  <Provider store = { store }>
    <App />
  
    </Provider>,
  document.getElementById('root')
);

