import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=8"
    );
    const json = await response.json();
    setTimeout(() => {
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hideLoader());
    }, 1000);
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
