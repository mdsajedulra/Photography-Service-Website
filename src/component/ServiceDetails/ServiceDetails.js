import React, { useContext, useEffect, useState } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/Authprovider';

const ServiceDetails = () => {
    const { user } = useContext(authContext)
    console.log(user)

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
            reviewId: _id,
            serviceName: title,
            userName: name,
            userURI: user.photoURL,
            email: email,
            comment: comment
        }
        console.log(review)
        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // Load service review
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    return (
        <div className='w-1/2 mx-auto my-10'>
            <img className='w-full text-center rounded-xl' src={img} alt="" />
            <div className='p-3 my-5 bg-blue-200 border border-blue-700 rounded-lg'>
                <h1 className="text-2xl font-semibold ">{title}</h1>
                <h1>Price: {price}</h1>
            </div>
            <p>{description}</p>

            {/* Reviews section */}
            {/* load review  */}
            <div className='flex flex-col gap-3 mt-5'>
                <h1 className='my-6 text-3xl'>Review Us</h1>

                {
                    reviews.map(review => <>
                        <div className='flex items-center gap-3'>
                            {console.log(review)}
                            <img className='w-16 border-2 border-blue-700 rounded-full' src={review.userURI ? review.userURI : 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'} alt="" />
                            <div className=''>
                                <h1 className='font-semibold'>{review?.userName}</h1>
                                <p>{review?.comment}</p>
                            </div>
                        </div>

                    </>)
                }
            </div>


            {/* review form  */}
            {
                user?.email ?
                    <form onSubmit={handleReviewForm} className='my-10'>
                        <h1 className='my-6 text-3xl'>Review Us</h1>
                        <div>
                            <label htmlFor="name">Name</label>
                            <br />
                            <input name='name' defaultValue={user?.displayName} className='w-full mb-5 border rounded-xl' type="text" placeholder='Name' id='name' />
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
                    :
                    <>
                        <p className='m-10 text-center'> Please login to add a review <Link className='text-blue-700' to='/login'>login.</Link></p>
                    </>
            }

        </div >
    );
};

export default ServiceDetails;