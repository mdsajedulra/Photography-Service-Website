import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { _id, img, title, description, price } = services;
    console.log(services)
    return (
        <div className='w-1/2 mx-auto my-10'>
            <img className='w-full text-center rounded-xl' src={img} alt="" />
            <div className='p-3 my-5 bg-blue-200 border border-blue-700 rounded-lg'>
                <h1 className="text-2xl font-semibold ">{title}</h1>
                <h1>Price: {price}</h1>
            </div>
            <p>{description}</p>

            {/* Reviews section */}

            <div>
                <h1 className='text-3xl'>Review Us</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input className='w-full border rounded-xl' type="text" placeholder='Name' id='name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input className='w-full border rounded-xl' id='email' type="email" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <br />
                    <input className='w-full border rounded-xl' id='comment' type="text" placeholder='Write your comment here' />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;