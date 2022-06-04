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