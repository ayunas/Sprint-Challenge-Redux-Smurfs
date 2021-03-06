/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

 function rootReducer(state={ smurfs : []}, action) {

    switch (action.type) {
      
      case "LOAD":
        return {
          ...state,
          fetchingSmurfs : true
        }
      
      case "SUCCESS":
        return {
          ...state,
          smurfs : action.payload,
          fetchingSmurfs : false
        }

      case "ADD":
        
        return {
          ...state,
          smurfs : state.smurfs.concat(action.payload),
          fetchingSmurfs : false
        }
        
      case "BANISH":
        return {
          ...state,
          smurfs : state.smurfs.filter( smurf => smurf.id !== action.payload )
          // smurfs : state.smurfs.filter( smurf => smurf.id !== action.payload.id )
        }

      default : 
        return state;
    }
 }

 export default rootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
