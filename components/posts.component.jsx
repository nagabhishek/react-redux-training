import React from 'react';

export default function PostsFunctional(props) {
  return (
    <div>
      <h2>All Posts</h2>

      <ul className="list-group">
        {props.allPosts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
