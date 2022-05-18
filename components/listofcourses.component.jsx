import React from 'react';
import Course from './courses.component';

function ListOfCourses(props) {
  let coursesToBeCreated = props.allCourses.map((course) => (
    <Course coursedetails={course} key={course.id} {...props} />
  ));
  return (
    <>
      <header>
        <h1> List Of Courses</h1>
      </header>
      <main>
        <div className="row">{coursesToBeCreated}</div>
      </main>
    </>
  );
}

export default ListOfCourses;
