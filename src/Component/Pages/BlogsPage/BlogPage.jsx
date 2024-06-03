// BlogPage.js
import React from 'react';
import Card from './Card';
import './blog.css'

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'Post 1',
      imageUrl: 'https://images.unsplash.com/photo-1626081708119-99cb0eff1f4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam corporis temporibus reprehenderit nesciunt quasi illum ab eveniet! Ipsum, neque? ',
      link: '/blogs/1',
    },
    {
      id: 2,
      title: 'Post 2',
      imageUrl: 'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam corporis temporibus reprehenderit nesciunt quasi illum ab eveniet! Ipsum, neque?',
      link: '/blogs/2',
    },
    {
      id: 1,
      title: 'Post 1',
      imageUrl: 'https://images.unsplash.com/photo-1626081708119-99cb0eff1f4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam corporis temporibus reprehenderit nesciunt quasi illum ab eveniet! Ipsum, neque?',
      link: '/blogs/1',
    },
    {
      id: 2,
      title: 'Post 2',
      imageUrl: 'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam corporis temporibus reprehenderit nesciunt quasi illum ab eveniet! Ipsum, neque?',
      link: '/blogs/2',
    },
    // Add more posts here
  ];

  return (
    <div className=" mx-auto">
      <section className="w-full">
        <img
          src="https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
          className="object-cover w-full h-[300px]"
          alt="colorful leafs"
        />
        <div className='w-[80%] mx-auto py-10'>
          <h1 className='text-center text-2xl pb-5'>Lorem ipsum dolor sit amet11111.</h1>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam vero esse voluptates quae accusamus repellendus. Eligendi ea voluptas vitae.</p>

        </div>
      </section>
      <div className="grid md:grid-cols-3  gap-4 w-[90%] mx-auto ">
        {posts.map(post => (
          <Card key={post.id} title={post.title} imageUrl={post.imageUrl} content={post.content} link={post.link} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
