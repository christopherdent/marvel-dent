
import React from "react";
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";


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


export default LoadingIndicator;