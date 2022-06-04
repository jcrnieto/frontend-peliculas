const initialState = {
  movies:[],
}

function rootReducer (state = initialState, action) {
   switch(action.type) {
       case 'GET_MOVIES':
           return {
               ...state,
               movies: action.payload
           }
        case 'GET_TITLE':
            return {
                ...state,
                movies: action.payload
            }   
       default:
           return state;
   }
}

export default rootReducer;