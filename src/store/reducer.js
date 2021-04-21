import * as actionTypes from './actions'

const initialState = {
  counter: 0,
  results: []
}

const reducer = (currentState = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return {
        ...currentState,
        counter: currentState.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...currentState,
        counter: currentState.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...currentState,
        counter: currentState.counter + action.payload.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...currentState,
        counter: currentState.counter - action.payload.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...currentState,
        results: currentState.results.concat({
          id: new Date(),
          value: currentState.counter
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
