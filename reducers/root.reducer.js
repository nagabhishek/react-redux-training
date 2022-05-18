import { combineReducers } from 'redux';
import { courses } from './courses.reducer';
import { posts } from './posts.reducer';

export var rootReducer = combineReducers({ courses, posts });
