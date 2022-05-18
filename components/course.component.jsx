import React from 'react';
import { useDispatch } from 'react-redux';
import {
  IncrementLikes,
  DeleteCourse,
  DecrementLikes,
} from '../actions/actionCreators';

function Course(props) {
  var dispatch = useDispatch();
  var ratings = [];
  for (let index = 0; index < props.coursedetails.rating; index++) {
    ratings.push(
      <span style={{ color: 'orange' }} key={index}>
        <i className="fa-solid fa-star"></i>
      </span>
    );
  }

  return (
    <div className="col-md-3 my-1">
      <div className="card p-1">
        <img
          height="200px"
          src={props.coursedetails.imageUrl}
          alt={props.coursedetails.name}
          className="card-img-top"
        />
        <div className="card-body">
          <p>{ratings}</p>

          <h4 className="card-title">{props.coursedetails.title}</h4>
          <h5 className="card-text">₹. {props.coursedetails.price}</h5>

          <button
            className="btn btn-primary mx-1"
            // onClick={() => props.IncrementLikes()}
            onClick={() => dispatch(IncrementLikes(props.coursedetails.id))}
          >
            {/* {this.props.coursedetails.likes}{" "} */}
            {props.coursedetails.likes}{' '}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>

          <button
            className="btn btn-warning mx-1"
            onClick={() => dispatch(DecrementLikes(props.coursedetails.id))}
          >
            {props.coursedetails.dislikes}{' '}
            <i className="fa-solid fa-thumbs-down"></i>
          </button>

          <button
            className="btn btn-danger mx-1"
            onClick={() => dispatch(DeleteCourse(props.coursedetails.id))}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
