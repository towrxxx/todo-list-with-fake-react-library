/* eslint-disable no-console */
function logger(reducer) {
  return (state, action, args) => {
    console.group(action);
    console.log("Pre State: ", state);
    console.log("Action Arguments: ", args);

    const nextState = reducer(state, action, args);

    console.log("Next State: ", nextState);
    console.groupEnd(action);
    return nextState;
  };
}

export default logger;
