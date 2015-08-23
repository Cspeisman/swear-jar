const initialState = {
  user: {
    username: null,
    password: null,
  },
  swearsSaid: [],
  costPerSwear: 1.50,
  count: 0,
  totalCost: 0,
};

export function handleAddSwearWord(state = initialState, action) {
  console.log('wtf')
  if (action.type !== 'ADD_SWEAR_WORD') return state;
  return {
    ...state,
    swearsSaid: state.swearsSaid.concat([action.swearWord]),
  };
}

export function handleIncrementSwearCount(state = initialState, action) {
  if (action.type !== 'INCREMENT_SWEAR_COUNT') return state;
  return {
    ...state,
    count: ++state.count,
    totalCost: state.totalCost + state.costPerSwear,
  };
}

export function handleUserLogin(state = initialState, action) {
  console.log(action)
  if (action.type !== 'FOO') return state;
  console.log(action)
  // return {
  //   ...state,
  //   swearsSaid: state.swearsSaid.concat([action.swearWord]),
  // };
}
