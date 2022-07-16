import * as api from '../api';

const getPosts = () => async (dispatch) => {
  const action = { type: 'FETCH_ALL', payload: [] };

  dispatch(action);
};
