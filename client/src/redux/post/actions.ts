import { createAsyncAction } from 'typesafe-actions';
import { Dispatch } from 'redux';

import ky from '../../ky/ky';
import { PostProps } from '../../types/post';

export const postGetAsync = createAsyncAction(
  'POST_GET_REQUEST',
  'POST_GET_SUCCESS',
  'POST_GET_FAILURE',
)<void, PostProps[], void>();

export const postGetApi = async (): Promise<PostProps[] | null> => {
  try {
    const post = await ky.get("post").json<PostProps[]>();
    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postGet = () => async (dispatch: Dispatch) => {
  dispatch(postGetAsync.request());
  // Get data
  const post = await postGetApi();
  if (post) {
    dispatch(postGetAsync.success(post));
  } else {
    dispatch(postGetAsync.failure());
  }
};

export const postDeleteApi = async (id: string): Promise<boolean> => {
  try {
    await ky.delete(`post/${id}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const postDeleteAsync = createAsyncAction(
  'POST_DELETE_REQUEST',
  'POST_DELETE_SUCCESS',
  'POST_DELETE_FAILURE',
)<string, string, void>();

export const postDelete = (id: string) => async (dispatch: Dispatch) => {
  dispatch(postDeleteAsync.request(id));
  const postDeleted = await postDeleteApi(id);
  if (postDeleted) {
    dispatch(postDeleteAsync.success(id));
  } else {
    dispatch(postDeleteAsync.failure());
  }
};