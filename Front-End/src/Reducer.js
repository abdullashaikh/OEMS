export const initialState = {
  token: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
export default reducer;
