export function courses(defStore = [], action) {
  let index;
  switch (action.type) {
    case 'INCREMENT_LIKES':
      //console.log('Within courses reducer !', action.theCourseId);
      index = defStore.findIndex((c) => c.id == action.theCourseId);

      return [
        ...defStore.slice(0, index),
        {
          ...defStore[index],
          likes: defStore[index].likes + 1,
        },
        ...defStore.slice(index + 1),
      ];

    case 'DECREMENT_LIKES':
      index = defStore.findIndex((c) => c.id == action.theCourseId);

      return [
        ...defStore.slice(0, index),
        {
          ...defStore[index],
          dislikes: defStore[index].dislikes - 1,
        },
        ...defStore.slice(index + 1),
      ];

    case 'ADD_NEW_COURSE':
      console.log('Within new courses reducer !', action.newCourse);
      return [...defStore.push(action.newCourse)];

    case 'DELETE_COURSE':
      console.log('Within delete courses reducer !', action.courseId);
      return [...defStore.filter((course) => course.id !== action.courseId)];

    default:
      return defStore;
  }
}
