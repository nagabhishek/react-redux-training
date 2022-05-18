export function courses(defStore = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('Within courses reducer !', action);
      return defStore; // new Store
    default:
      return defStore;
  }
}
