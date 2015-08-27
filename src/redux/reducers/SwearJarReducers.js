const initialState = {
  user: {
    username: null,
    password: null,
  },
  swearsSaid: [],
  costPerSwear: 1.50,
  swearCount: 0,
  totalCost: 0,
};

export function handleAddSwearWord(state = initialState, action) {
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
    swearCount: ++state.swearCount,
    totalCost: state.totalCost + state.costPerSwear,
  };
}

export function handleUserLogin(state = initialState, action) {
  if (action.type !== 'FOO') return state;
  let {jar} = action;
  return {
    ...state,
    ...jar,
  };
}
