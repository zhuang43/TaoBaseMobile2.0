import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/authendication';
import { FETCH_FEATURE_STARS_ICON_SUCCESS } from '../actions/users';

const initialState = {
  isLogin: false,
  errorMessage: null,
  featureStarsIcons: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLogin: true };
    case LOGIN_FAIL:
      return { ...state, isLogin: false, errorMessage: action.error };
    case FETCH_FEATURE_STARS_ICON_SUCCESS:
      return { ...state, featureStarsIcons: action.icons };
    default:
      return state;
  }
};

export default userReducer;
