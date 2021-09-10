import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF"
export const ERROR_MESSAGE = "ERROR_MESSAGE"

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type: FETCH_SMURFS})
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({type: FETCH_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: FETCH_FAIL, payload: err.message})
            })
    }
}




//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

export const addSmurf = (newSmurf) => {
    return {type: ADD_SMURF, payload: newSmurf}
}
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const setError = (errorMessage) => {
    return {type: ERROR_MESSAGE, payload: errorMessage}
}

