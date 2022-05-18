import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListOfCourses from './listofcourses.component';
import Posts from "./posts.component";

export default function App(props) {
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
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route index element={<ListOfCourses {...props} />}></Route>
          <Route path="/posts" element={<Posts {...props} />}></Route>

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
