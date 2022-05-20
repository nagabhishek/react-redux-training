import axios from 'axios';
import { call, put, retry, takeLatest } from 'redux-saga/effects';

const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');
const getPostDetails = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

function* FetchPostsUsingAPI() {
  try {
    let duration = 1000;
    const response = yield retry(3, duration * 10, getPosts); //using retry
    //const response = yield call(getPosts); // makes the async call !
    yield put({ type: 'FETCH_POSTS', posts: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILED', message: error.message });
  }
}

function* FetchPostsDetailsUsingAPI(action) {
  try {
    const response = yield call(getPostDetails, action.id); // makes the async call !
    yield put({ type: 'FETCH_POST', post: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILED', message: error.message });
  }
}

export function* mySaga() {
  yield takeLatest('FETCH_POSTS_REQUESTED', FetchPostsUsingAPI);
  yield takeLatest('FETCH_POSTS_DETAILS', FetchPostsDetailsUsingAPI);
}
