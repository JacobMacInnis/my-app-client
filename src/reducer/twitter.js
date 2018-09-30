import { FETCH_TWITTER_REQUEST, FETCH_TWITTER_SUCCESS, FETCH_TWITTER_ERROR } from './../actions/twitter';

const initialState = {
  loading: false,
  error: null,
  twitter: ''
};

export default function twitterReducer(state=initialState, action) {
  if (action.type === FETCH_TWITTER_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } if (action.type === FETCH_TWITTER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      twitter: action.twitterFeed
    });
  } if (action.type === FETCH_TWITTER_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
      twitter: ''
    });
  } return state;
}