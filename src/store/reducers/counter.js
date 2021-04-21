import * as actionTypes from '../actions'

const initialState = {
  counter: 0
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
    default:
      return currentState
  }
}

export default reducer;
