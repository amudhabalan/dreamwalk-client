import React from 'react';

const Post = ({ title, description, image, index }) => {
  return (
    <div id={index}>
      <h2>{title}</h2>
      <img src={image} />
      <p>{description}</p>
    </div>
  );
};

export default Post;
