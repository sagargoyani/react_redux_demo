import { LOGIN_RES } from './constant';
import { loadState } from '../../services/localStorage';
const initalStats = loadState();
const loginReducer = (
  state = initalStats && initalStats.loginResponse && initalStats.loginResponse.response.code === 1 ? initalStats.loginResponse : null,
  action,
) => {
  switch (action.type) {
    case LOGIN_RES:
      return action.payload;
    default:
      break;
  }
  return state;
};

export default loginReducer;
