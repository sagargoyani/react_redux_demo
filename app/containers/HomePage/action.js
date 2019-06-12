import { auth } from '../../services/auth';
import { LOGIN_RES } from './constant';
export const loginRespose = value => ({
  type: LOGIN_RES,
  payload: {
    response: value,
  },
});
export const userLogin = value => dispatch => {
  auth.login(value).then(response => {
    console.log('response : ', response);
    const { data } = response;
    if (response.data.code === 0) {
      dispatch(loginRespose(data));
    } else {
      dispatch(loginRespose(data));
    }
  });
};
