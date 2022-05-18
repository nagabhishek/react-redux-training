const INCREMENT_LIKES = 'INCREMENT_LIKES'; // best practice !
const DELETE_COURSE = 'DELETE_COURSE';
const ADD_NEW_COURSE = 'ADD_NEW_COURSE';
const DELETE_POST = 'DELETE_POST';

export function IncrementLikes(theCourseId) {
  return { type: INCREMENT_LIKES, theCourseId };
}

export function DeleteCourse() {
  return { type: DELETE_COURSE };
}

export function AddCourse() {
  return { type: ADD_NEW_COURSE };
}

export function DeletePost() {
  return { type: DELETE_POST };
}
