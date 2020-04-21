import { INITIALIZE_AUTH } from '../actions/authActions';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case INITIALIZE_AUTH:
      return initializeAuth(state, payload);
    default:
      return state;
  }
};

const initializeAuth = (state, { code }) => {
  return { ...state, code };
};
