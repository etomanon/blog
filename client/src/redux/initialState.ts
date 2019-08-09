import { initialPost, PostState } from "./post/reducers";

export const initialState = {
  post: initialPost
};

export interface AppState {
  post: Readonly<PostState>;
}
