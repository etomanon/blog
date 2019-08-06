import { ActionType, getType } from 'typesafe-actions';
import { Reducer } from 'redux';

import { pending, rejected, StateCommon } from '../utils/common';
import { Post } from '../../types/post';

import * as actions from './actions';

export interface PostState extends StateCommon {
  posts?: Post[];
}

export const initialUser: PostState = {
  posts: [],
  pending: false,
  error: false,
};

export const reducerPost: Reducer<PostState, UserActions> = (
  state = initialUser,
  action,
) => {
  switch (action.type) {
    case getType(actions.postGetAsync.request):
      return pending(state);
    case getType(actions.postGetAsync.failure):
      return rejected(state);
    case getType(actions.postGetAsync.success):
      return {
        ...state,
        posts: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export type UserActions = ActionType<typeof actions>;
