import { combineReducers } from "redux";

import { reducerPost } from "./post/reducers";

export const reducerRoot = combineReducers({
  post: reducerPost
});
