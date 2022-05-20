import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FetchPostsDetails } from '../actions/actionCreators';

export default function PostDetails() {
  let { id } = useParams();
  const { posts } = useSelector((state) => state);
  var dispatch = useDispatch();

  let [thePost, setPost] = useState({});

  useEffect(() => {
    if (posts.length) {
      const post = posts.find((p) => p.id == id);
      setPost(post);
    } else {
      dispatch(FetchPostsDetails(id));
    }
  });
  return (
    <div className="alert alert-secondary">
      <h2>Post Details for {id}</h2>
      <h3>UserId : {thePost.userId}</h3>
      <h3>Title : {thePost.title}</h3>
      <h3>Body : {thePost.body}</h3>
    </div>
  );
}
