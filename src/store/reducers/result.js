import * as actionTypes from '../actions'

const initialState = {
  results: []
}

const reducer = (currentState = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...currentState,
        results: currentState.results.concat({
          id: new Date(),
          value: action.result
        }) // returns a new array, NOT use push
      }
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results]
      // newArray.slice(id, 1)

      const updatedResults = currentState.results.filter(result => result.id !== action.payload.resultId)
      return {
        ...currentState,
        results: updatedResults
      }
    default:
      return currentState
  }
}

export default reducer;
