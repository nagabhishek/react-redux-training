export function courses(defStore = [], action) {
  let index;
  switch (action.type) {
    case 'INCREMENT_LIKES':
      index = defStore.findIndex((course) => course.id == action.theCourseId);
      return [
        ...defStore.slice(0, index),
        {
          ...defStore[index],
          likes: defStore[index].likes + 1,
        },
        ...defStore.slice(index + 1),
      ];

    case 'DECREMENT_LIKES':
      index = defStore.findIndex((course) => course.id == action.theCourseId);
      return [
        ...defStore.slice(0, index),
        {
          ...defStore[index],
          dislikes: defStore[index].dislikes - 1,
        },
        ...defStore.slice(index + 1),
      ];

    case 'ADD_NEW_COURSE':
      const newList = [...defStore];
      newList.push(action.newCourse);
      return [...newList];

    case 'DELETE_COURSE':
      return [...defStore.filter((course) => course.id !== action.courseId)];

    default:
      return defStore;
  }
}
