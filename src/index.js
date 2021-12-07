import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";


//Vanilla Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


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
  <React.StrictMode>
    <App />
    <LoadingIndicator/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
