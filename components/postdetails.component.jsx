import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostDetails() {
  let { id } = useParams();
  const { posts } = useSelector((state) => state);
  let [thePost, setPost] = useState({});

  useEffect(() => {
    const post = posts.find((p) => p.id == id);
    setPost(post);
  });
  return (
    <div>
      <h2>Post Details for {id}</h2>
      <h3>Title : {thePost.title}</h3>
      <h3>Body : {thePost.body}</h3>
    </div>
  );
}
