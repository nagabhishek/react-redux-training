export function posts(defStore = [], action) {
  switch (action.type) {
    case 'DELETE_POST':
      return defStore;

    case 'FETCH_POSTS':
      return action.posts;

    case 'FETCH_POST':
      return [...defStore, action.post];

    case 'FETCH_POSTS_FAILED':
      return action.message;

    default:
      return defStore;
  }
}
