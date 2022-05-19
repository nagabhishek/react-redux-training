import React from 'react';
import Course from './course.component';
import { useSelector } from 'react-redux';
import CurrentItemsInCart from './currentitemsincart.component';

function ListOfCourses() {
  const { courses } = useSelector((store) => store);

  let coursesToBeCreated = courses.map((course) => (
    <Course coursedetails={course} key={course.id} />
  ));
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1> List Of Courses</h1>
        <CurrentItemsInCart />
      </header>
      <main>
        <div className="row">{coursesToBeCreated}</div>
      </main>
    </>
  );
}

export default ListOfCourses;
