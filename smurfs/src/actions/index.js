import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function getSmurfs(url) {

  console.log('getSmurfs action creator has been triggered. ');
  return (dispatch) => {
    dispatch({type : "LOAD"});
    axios.get(url)
         .then( res => {
           console.log("API get request succeeded!: ", res.data);
           dispatch({type: "SUCCESS", payload: res.data})
         })
         .catch( err => {
           console.log(err);
         })
  }
}

export function addSmurf(smurf) {
  console.log('addSmurfs action creator has been triggered.');
  return (dispatch) => {
    dispatch({type: "LOAD"});
    axios.post('https://smurfs-redux.herokuapp.com/smurfs',smurf)
         .then( res => {
            console.log("post successful ", res.data[res.data.length-1]);
            dispatch({
              type: "ADD", payload: res.data[res.data.length-1]
            })
         })
         .catch( err => console.log('error in adding smurf to endpoint: ',err));
  }
}

export function banish(smurf) {
  console.log('banish has been triggered', smurf);

  return (dispatch) => {
    dispatch({type: "LOAD"});
    axios.delete(`https://smurfs-redux.herokuapp.com/smurfs/${smurf.id}`)
         .then( res => {
           console.log( 'delete success: ', res.data);
           dispatch({type: "BANISH", payload: smurf.id})
          } )
         .catch( err => console.log(err));

      // return {
      // type: "BANISH",
      // payload : smurf
      // }
  }
} 



