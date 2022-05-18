export function posts(defStore = [], action) {
  switch (action.type) {
    case 'DELETE_POST':
      console.log('Within posts reducer !');
      return defStore; // new Store

    default:
      return defStore;
  }
}
