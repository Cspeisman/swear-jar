import * as SwearJarReducers from './SwearJarReducers';

function composeReducers(reducers) {
  return function(state, action) {
    return reducers.reduce((prevState, reducer) => reducer(prevState, action), state);
  };
}

function aggregateReducers(reducerMap) {
  return composeReducers(Object.keys(reducerMap).map(key => reducerMap[key]));
}

export const swearJar = aggregateReducers(SwearJarReducers);
