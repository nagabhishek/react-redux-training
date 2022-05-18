import React from 'react';
import Course from './course.component';
import { useSelector, useDispatch } from 'react-redux';

function ListOfCourses() {
  const { courses } = useSelector((store) => store);
  let coursesToBeCreated = courses.map((course) => (
    <Course coursedetails={course} key={course.id} />
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
