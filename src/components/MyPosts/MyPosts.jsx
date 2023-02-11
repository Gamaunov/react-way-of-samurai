import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profile-reducer.js";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className="content">
      <h3>My posts</h3>
      <div>
        <textarea
          className="content__textarea"
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
        <button className="content__btn" type="submit" onClick={addPost}>
          button
        </button>
      </div>
      <div className="content__posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
