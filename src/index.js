import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";


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


///consider moving to App.js 
const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

   return (
    promiseInProgress && 
    <Loader
    type="Puff"
    color="#00BFFF"
    height={300}
    width={300}
    timeout={5000} //3 secs
    id='loader'
  />
  );  
 }

 

ReactDOM.render(
  <Provider store = { store }>
    <App />
    <LoadingIndicator/>  
    </Provider>,
  document.getElementById('root')
);

