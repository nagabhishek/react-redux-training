import { createStore } from 'redux';
import { rootReducer } from '../reducers/root.reducer';

var storeData = {
  courses: [],
  posts: [],
};

export var store = createStore(rootReducer, storeData);
