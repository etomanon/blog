import { createAsyncAction } from 'typesafe-actions';
import { Dispatch } from 'redux';

import ky from '../../ky/ky';
import { Post } from '../../types/post';

export const postGetAsync = createAsyncAction(
  'POST_GET_REQUEST',
  'POST_GET_SUCCESS',
  'POST_GET_FAILURE',
)<void, Post[], void>();

export const userRequest = async (): Promise<Post[] | null> => {
  try {
    const user = await ky.get("user").json<Post[]>();
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const userGet = () => async (dispatch: Dispatch) => {
  // Start request
  dispatch(postGetAsync.request());
  // Get data
  const post = await userRequest();
  // Check data
  if (post) {
    dispatch(postGetAsync.success(post));
  } else {
    dispatch(postGetAsync.failure());
  }
};
