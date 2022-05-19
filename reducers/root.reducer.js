import { combineReducers } from 'redux';
import { courses } from './courses.reducer';
import { posts } from './posts.reducer';
import { cartItems } from './cartItems.reducer';

export const rootReducer = combineReducers({ courses, posts, cartItems });
