import React from "react";
import "./Post.css";
import avatar from "../../../img/ava.png";

const Post = (props) => {


  return (
    <div className="content__post">
      <img className="content__post-img" src={avatar} alt="Avatar"></img>
      {props.message}
      <span className='content__likes' message="12">Like</span> {props.likesCount}
    </div>
  );
};

export default Post;
