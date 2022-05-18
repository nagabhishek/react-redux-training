const INCREMENT_LIKES = 'INCREMENT_LIKES';
const DECREMENT_LIKES = 'DECREMENT_LIKES'; // best practice !
const DELETE_COURSE = 'DELETE_COURSE';
const ADD_NEW_COURSE = 'ADD_NEW_COURSE';
const DELETE_POST = 'DELETE_POST';

export function IncrementLikes(theCourseId) {
  return { type: INCREMENT_LIKES, theCourseId };
}

export function DecrementLikes(theCourseId) {
  return { type: DECREMENT_LIKES, theCourseId };
}

export function DeleteCourse(courseId) {
  return { type: DELETE_COURSE, courseId };
}

export function AddCourse(course) {
  return { type: ADD_NEW_COURSE, course };
}

export function DeletePost() {
  return { type: DELETE_POST };
}
