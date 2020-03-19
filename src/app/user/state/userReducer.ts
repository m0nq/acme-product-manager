export function userReducer(state, action) {
  switch (action.type) {

    case 'TOGGLE_USER_NAME':
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}

