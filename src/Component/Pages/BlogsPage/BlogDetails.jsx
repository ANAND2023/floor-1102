// PostPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  let { id } = useParams(); // Get the id from the URL
  // You can fetch the post details based on the id here

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-2">Post {id}</h2>
      <p>This is the detailed content for Post {id}.</p>
    </div>
  );
};

export default BlogDetails;
