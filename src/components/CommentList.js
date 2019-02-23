/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
  const list = comments.map(comment => <li key={comment}>{comment}</li>);
  return <ul className="comment-list">{list}</ul>;
};

export default connect(({ comments }) => ({ comments }))(CommentList);
