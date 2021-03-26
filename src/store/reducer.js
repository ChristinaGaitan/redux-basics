const initialState = {
  counter: 0,
  results: []
}

const reducer = (currentState = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...currentState,
        counter: currentState.counter + 1
      }
    case 'DECREMENT':
      return {
        ...currentState,
        counter: currentState.counter - 1
      }
    case 'ADD':
      return {
        ...currentState,
        counter: currentState.counter + action.payload.value
      }
    case 'SUBTRACT':
      return {
        ...currentState,
        counter: currentState.counter - action.payload.value
      }
    case 'STORE_RESULT':
      return {
        ...currentState,
        results: currentState.results.concat({
          id: new Date(),
          value: currentState.counter
        }) // returns a new array, NOT use push
      }
    default:
      return currentState
  }
}

export default reducer;
