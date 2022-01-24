


  export function searchComics(query){

    const publicKey = '8ba20045db37b24d33e34f26c4be8257'
    const hash = '4c2e71d472bde5cbb7bc4a17eac68621'        
    const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}&limit=100` + query;
    const configObj = {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
   
    
    return (dispatch) => {  
        fetch(url, configObj)
        .then(res => res.json())
        .then(comics => dispatch({
             
            type: 'SEARCH_COMICS',
            payload: comics.results 
        }))        
      }
    }
  
  




