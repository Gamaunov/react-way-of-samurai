import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPosts()
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
        <button className="content__btn" onClick={onAddPost}>
          Add Post
        </button>
      </div>
      <div className="content__posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
