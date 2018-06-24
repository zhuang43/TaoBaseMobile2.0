import { API_URL } from '../../config';

export const login = ({ username, password }) => (dispatch) => {
  fetch(`${API_URL}/login`, {
    method: 'post',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then((data) => {
      if (data.code === 5) {
        dispatch(loginSuccess());
      } else if (data.code === 1) {
        dispatch(loginFail({ message: 'Failed to log in, please try again' }));
      } else if (data.code === 2) {
        dispatch(loginFail({ message: 'Account Not Found!' }));
      }
    })
    .catch((error) => {
      dispatch(loginFail({ message: 'error occur related to server' }));
    });
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = error => ({
  type: LOGIN_FAIL,
  error,
});
