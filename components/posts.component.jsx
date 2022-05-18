import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// using react-redux hooks
export default function Posts(props) {
  const { posts } = useSelector((store) => store);
  return (
    <div>
      <h2>All Posts</h2>

      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
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
