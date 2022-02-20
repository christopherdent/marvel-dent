const initialState = {
  comics: [],
  filter: ''     
  }


export default function comicsReducer(state = initialState, action) {

    switch (action.type) {  

      case 'FETCH_COMICS':
             
        return {
             ...state, 
             comics: action.payload.data.results, 
             filter: 'Hi there' 
            }
        
        case 'SEARCH_COMICS':
            
            return { 
                ...state, 
                comics: action.payload.data.results,
                filter: 'Hi there' 
                
            }

            case 'LIVE_SEARCH_COMICS':
              
              console.log('fsd')
    
            
            if(action.payload.data.results) {
              return { 
                ...state, 
                comics: action.payload.data.results,
                filter: 'Hi there'                
              }
            } 
             
          


        default: 
        return state; 
      }
    }
  