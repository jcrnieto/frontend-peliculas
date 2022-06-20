const initialState = {
  movies:[],
  movie:[]
  
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
        case 'GET_ID':
            return {
                ...state,
                movie: action.payload
            }
        case 'GET_ONLY_MOVIE':
            return {
                ...state,
                movies: action.payload
            }
        case 'GET_ONLY_SERIES':
            return {
                ...state,
                movies: action.payload
            }
        case 'GET_ORDER_DESC':
            //let orderDesc = action.payload === 'DESC'?
            return {
                ...state,
                movies: action.payload
            }
        case 'GET_ORDER_ASC':
            return {
                ...state,
                movies: action.payload
            }
       default:
           return state;
   }
}

export default rootReducer;