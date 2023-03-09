const initState = {
  goals: [],
};

export function reducer(state = initState, action) {
  switch (action.TYPE) {
    case "SET_GOAL":
      return {
        ...state,
        goals: [...goals, action.goal],
      };

    default:
      return state;
  }
}
