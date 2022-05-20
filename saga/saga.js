import axios from 'axios';
import { call, put, retry, takeLatest } from 'redux-saga/effects';

const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');

function* FetchPostsUsingAPI() {
  try {
    const response = yield call(getPosts); // makes the async call !
    yield put({ type: 'FETCH_POSTS', posts: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILED', message: error.message });
  }
}

function* FetchPostsUsingRetry() {
  try {
    let duration = 1000;
    const response = yield retry(3, duration * 10, getPosts);
    yield put({ type: 'FETCH_POSTS', posts: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILED', message: error.message });
    console.log(error);
  }
}

export function* mySaga() {
  yield takeLatest('FETCH_POSTS_REQUESTED', FetchPostsUsingRetry);
}
