import React from 'react';

const Blog = () => {
    return (
        <div className='w-[80%] mx-auto flex flex-col gap-10 my-10'>
            <h1 className="text-3xl font-semibold text-center">Blog</h1>
            <div className='p-5 bg-blue-300 border border-blue-700 rounded-xl'>
                <h1 className='text-xl font-semibold'>1. Difference between SQL and NoSQL</h1>
                <p>
                    <h2 className='font-semibold'>SQL</h2>
                    <ul>
                        <li> Structured Data stroed in Tables</li>
                        <li>Static</li>
                        <li>Vertical</li>
                        <li>Structured Query Language</li>
                        <li>Helpful to design complex queries</li>
                    </ul>
                    <br />
                    <br />
                    <h2 className='font-semibold '>NoSQL</h2>
                    <ul>
                        <li>Non-Relational</li>
                        <li>Un-structured stroed in JSON files but the grpah database does supports relationship</li>
                        <li>Dynamic</li>
                        <li>Horizantal</li>
                        <li>Un-structured Query Language</li>
                    </ul>
                </p>
            </div>


            <div className='p-5 bg-blue-300 border border-blue-700 rounded-xl'>
                <h1 className='text-xl font-semibold'>2. What is JWT, and how does it work?</h1>
                <p>
                    First, some termes d’art need to be disambiguated. It’s not uncommon to hear somebody refer to a REST API as simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof.
                </p>
            </div>
            <div className='p-5 bg-blue-300 border border-blue-700 rounded-xl'>
                <h1 className='text-xl font-semibold'>3. What is the difference between javascript and NodeJS?</h1>
                <p>
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                </p>
            </div>
            <div className='p-5 bg-blue-300 border border-blue-700 rounded-xl'>
                <h1 className='text-xl font-semibold'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                </p>
            </div>
        </div>
    );
};

export default Blog;