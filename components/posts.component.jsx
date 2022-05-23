import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FetchPostsAsync,
  FetchPostsRequested,
} from '../actions/actionCreators';
import { Link } from 'react-router-dom';

export default function Posts() {
  const { posts } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(FetchPostsAsync()); using thunk
    dispatch(FetchPostsRequested()); // using saga
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {/* <button
        className="btn btn-success"
        onClick={() => dispatch(FetchPostsRequested())}
      >
        Get All Posts !
      </button> */}
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            ({post.id})<Link to={`/postdetails/${post.id}`}> {post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Using Connect (accepting props)

// import React, { useEffect, useState } from "react";

// export default function Posts(props) {
//   return (
//     <div>
//       <h2>All Posts</h2>

//       <ul className="list-group">
//         {props.allPosts.map((post) => (
//           <li className="list-group-item" key={post.id}>
//             {post.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
