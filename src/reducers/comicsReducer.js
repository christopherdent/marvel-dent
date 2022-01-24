export default function comicsReducer(state = { comics: [] }, action) {

    switch (action.type) {  

      case 'FETCH_COMICS':
            
        return {
             ...state, 
             comics: action.payload.data.results 
            }
        
        case 'SEARCH_COMICS':
            return { 
                ...state, 
                comics: action.payload 
                //action.payload.data.results 
            }
        default: 
        return state; 
      }
    }
  