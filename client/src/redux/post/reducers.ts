import { ActionType, getType } from 'typesafe-actions';
import { Reducer } from 'redux';

import { pending, rejected, StateCommon } from '../utils/common';
import { PostProps } from '../../types/post';

import * as actions from './actions';

export interface PostState extends StateCommon {
  posts: PostProps[];
}

export const initialPost: PostState = {
  posts: [],
  pending: false,
  error: false,
};

export const reducerPost: Reducer<PostState, PostActions> = (
  state = initialPost,
  action,
) => {
  switch (action.type) {
    case getType(actions.postGetAsync.request):
    case getType(actions.postDeleteAsync.request):
      return pending(state);
    case getType(actions.postDeleteAsync.failure):
    case getType(actions.postGetAsync.failure):
      return rejected(state);
    case getType(actions.postGetAsync.success):
      return {
        ...state,
        posts: action.payload,
        pending: false,
      };
    case getType(actions.postDeleteAsync.success):
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.payload),
        pending: false,
      };
    default:
      return state;
  }
};

export type PostActions = ActionType<typeof actions>;
