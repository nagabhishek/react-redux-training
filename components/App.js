import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListOfCourses from './listofcourses.component';
// import Posts from './posts.component';
import NewCourse from './newcourse.component';
import PostDetails from './postdetails.component';

const Posts = lazy(() => import('./posts.component'));
const loader = () => <strong>Loading..</strong>;

function App(props) {
  // console.log(props);
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Online Training
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Courses
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/newcourse">
                    New Course
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ListOfCourses />}></Route>
          <Route path="/newcourse" element={<NewCourse />}></Route>
          <Route
            path="/posts"
            element={
              <Suspense fallback={loader()}>
                <Posts />
              </Suspense>
            }
          ></Route>
          <Route path="/postdetails/:id" element={<PostDetails />}></Route>
          <Route
            path="*"
            element={
              <img src="https://i.ytimg.com/vi/Hbdk2_1ZU3o/maxresdefault.jpg" />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
