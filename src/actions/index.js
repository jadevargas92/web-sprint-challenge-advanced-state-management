import axios from 'axios';

export const FETCH_SMURF_STARTING = 'FETCH_SMURF_STARTING'
export const FETCH_SMURF_SUCCESSFUL = 'FETCH_SMURF_SUCCESSFUL'
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED'
export const ADD_SMURF = 'ADD_SMURF'
export const SET_ERROR = 'SET_ERROR'

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURF_STARTING});
    axios.get('http://localhost:3333/smurfs')
        .then(res =>
            dispatch({type: FETCH_SMURF_SUCCESSFUL, payload: res.data})
        ).then(res=>{
            console.log(res)
        })
        .catch(err =>
            dispatch({type: FETCH_SMURF_FAILED, payload: err}))
}

export const addSmurf = (smurf) => {
    return({type: ADD_SMURF, payload: smurf})
}

export const setError = error => {
    return({type: SET_ERROR, payload: error})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.