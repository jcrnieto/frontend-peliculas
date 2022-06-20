import axios from 'axios';

export function getMovies() {
    return async function(dispatch) {
        try {
          var json = await axios.get("/movies");
          //console.log('esto es actions',json.data);
          return dispatch({
            type: "GET_MOVIES",
            payload: json.data
          });
        } catch (error) {
          console.log(error);
        }
    }
}

export function getTitle(title){
    return async function(dispatch) {
        try {
           var json = await axios.get(`/movies?title=${title}`);
           return dispatch({
               type: "GET_TITLE",
               payload: json.data
           });
        }catch(error){
            console.log(error)
        }
    }
}

export function getId(id){
    return async function(dispatch) {
        try{
          var json = await axios.get("/idfilter/" + id);
          console.log('actions',json.data)
          return dispatch({
              type: "GET_ID",
              payload: json.data[0]
          })
        }catch(error){
            console.log(error)
        }
    }
}

export function getOnlyMovies(){
    return async function(dispatch) {
        try{
          var json = await axios.get("/movies?type=movie");
          //console.log(json.data)
          return dispatch({
              type: 'GET_ONLY_MOVIE',
              payload: json.data
          })
        }catch(error){
            console.log(error)

        }
    }
}

export function getOnlySeries(){
    return async function(dispatch) {
        try{
           var json = await axios.get("/filterSeries?type=series");
           //console.log(json.data)
           return dispatch({
               type: 'GET_ONLY_SERIES',
               payload: json.data
           })
        }catch(error){
            console.log(error)
        }
    }
}

export function getOrderDesc(){
    return async function(dispatch) {
        try{
           var json = await axios.get("/age?year=DESC")
           //console.log(json.data)
           return dispatch({
               type: 'GET_ORDER-DESC',
               payload: json.data
           })
        }catch(error){
            console.log(error)
        }
    }
}

// export function getOrderAsc(){
//     return async function(dispatch) {
//         try{
//            var json = await axios.get("/age?year=ASC")
//            return dispatch({
//                type: 'GET_ORDER-ASC',
//                payload: json.data
//            })
//         }catch(error){
//             console.log(error)
//         }
//     }
// }