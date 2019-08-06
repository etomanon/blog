import { initialUser, PostState } from './post/reducers';

// Initial state for store
export const initialState = {
  post: initialUser,
};

export interface AppState {
  post: Readonly<PostState>;
}
