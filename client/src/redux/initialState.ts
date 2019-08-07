import { initialPost, PostState } from './post/reducers';

// Initial state for store
export const initialState = {
  post: initialPost,
};

export interface AppState {
  post: Readonly<PostState>;
}
