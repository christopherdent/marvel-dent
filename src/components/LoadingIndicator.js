import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";


const LoadingIndicator = (props) => {

    const LoadingIndicator = (props) => {
        const { promiseInProgress } = usePromiseTracker();
      
         return promiseInProgress && 
       
          <div
          style = {{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          >
            
            <Loader type="Watch" color="red" height="200" width="200" />
            </div>
    
       }




    
    return (
      <>
        <LoadingIndicator />
        <br />
      </>


  
    )
  
  }
  
  
  export default LoadingIndicator