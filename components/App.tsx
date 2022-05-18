import * as React from 'react';
import ListOfCourses from './listofcourses.component';

export default function App(props) {
  console.log(props);
  return (
    <div>
      <ListOfCourses allCourses={props.allCourses} />
    </div>
  );
}
