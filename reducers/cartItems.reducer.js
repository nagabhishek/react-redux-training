export function cartItems(defStore = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...defStore, action.course];

    default:
      return defStore;
  }
}
