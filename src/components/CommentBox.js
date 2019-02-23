/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';

class CommentBox extends React.Component {
  state = { text: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    const { addComment: addCommentAction } = this.props;
    addCommentAction(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea onChange={e => this.setState({ text: e.target.value })} value={text} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addComment },
)(CommentBox);
