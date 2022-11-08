import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/Authprovider';

const ServiceDetails = () => {
    const { user } = useContext(authContext)

    const services = useLoaderData();
    const { _id, img, title, description, price } = services;


    // handle Review form
    const handleReviewForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const comment = form.comment.value;
        const review = {
            userName: name,
            email: email,
            comment: comment
        }
        console.log(review)
    }
    return (
        <div className='w-1/2 mx-auto my-10'>
            <img className='w-full text-center rounded-xl' src={img} alt="" />
            <div className='p-3 my-5 bg-blue-200 border border-blue-700 rounded-lg'>
                <h1 className="text-2xl font-semibold ">{title}</h1>
                <h1>Price: {price}</h1>
            </div>
            <p>{description}</p>

            {/* Reviews section */}

            <form onSubmit={handleReviewForm} className='my-10'>
                <h1 className='my-6 text-3xl'>Review Us</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input name='name' defaultValue={user?.displayName} readOnly className='w-full mb-5 border rounded-xl' type="text" placeholder='Name' id='name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input name='email' defaultValue={user?.email} readOnly className='w-full mb-5 border rounded-xl' id='email' type="email" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <br />

                    <textarea name='comment' className='w-full h-40 mb-5 border rounded-xl' id="w3review" rows="4" cols="50" placeholder=' write your valueable comment'></textarea>
                </div>
                <button className=" rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type='submit'>Submit</button>
            </form>
        </div >
    );
};

export default ServiceDetails;