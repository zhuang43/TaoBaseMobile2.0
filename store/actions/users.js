import { API_URL } from '../../config';

export const fetchFeatureStarsIcons = () => (dispatch) => {
  fetch(`${API_URL}/private/recommendation/stars`)
    .then(res => res.json())
    .then(icons => dispatch(fetchFeatureStarsIconSuccess(icons)))
    .catch(err => console.log(err));
};

export const FETCH_FEATURE_STARS_ICON_SUCCESS = 'FETCH_FEATURE_STARS_ICON_SUCCESS';
export const fetchFeatureStarsIconSuccess = icons => ({
  type: FETCH_FEATURE_STARS_ICON_SUCCESS,
  icons,
});
