const initialState = {
  repositories: [],
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "repositories/fetchData":
      return {
        ...state,
        repositories: action.payload,
      };
    case "user/fetchData":
      return {
        ...state,
        user: action.payload,
      };
    case "repositories/removeData":
      return {
        ...state,
        repositories: [],
      };
    case "user/removeData":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
