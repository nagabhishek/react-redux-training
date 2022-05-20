export function posts(defStore = [], action) {
  switch (action.type) {
    case 'DELETE_POST':
      console.log('Within posts reducer !');
      return defStore;

    case 'FETCH_POSTS':
      return action.posts;

    case 'FETCH_POSTS_FAILED':
      return action.message;

    default:
      return defStore;
  }
}
