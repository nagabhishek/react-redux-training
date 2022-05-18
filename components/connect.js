import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from '../actions/actionCreators';
import App from './App';

function mapStateToProps(store) {
  return {
    allCourses: store.courses,
    allPosts: store.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AllActions, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(App); // MainApp - HOC
export default MainApp;
