export function courses(defStore = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      //console.log('Within courses reducer !', action.theCourseId);
      let index = defStore.findIndex((c) => c.id == action.theCourseId);

      return [
        ...defStore.slice(0, index),
        {
          ...defStore[index],
          likes: defStore[index].likes + 1,
        },
        ...defStore.slice(index + 1),
      ];
      return defStore; // new Store
    default:
      return defStore;
  }
}
