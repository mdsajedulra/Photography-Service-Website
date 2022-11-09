import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateReviews = () => {



    const route = useParams();
    const { id } = route;
    console.log(id)


    const review = useLoaderData()
    console.log(review)
    const { comment, email, serviceName, reviewId, userName, _id } = review;
    const handleReviewUpdata = event => {
        event.preventDefault();
        const form = event.target;
        const updateReview = {
            comment: form.comment.value
        }
        console.log(updateReview)
        fetch(`http://localhost:5000/reviewupdate/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        }).then(res => res.json())
            .then(data => {
                if (data.data) {
                    alert('successfully updated')
                }
                console.log(data.data)
            })
    }

    return (
        <div>

            <form className='my-10' onSubmit={handleReviewUpdata}>
                <h1 className='my-6 text-3xl font-semibold'>Edit your review</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input defaultValue={userName} name='name' className='w-full mb-5 border rounded-xl' type="text" placeholder='Name' id='name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input defaultValue={email} readOnly name='email' className='w-full mb-5 border rounded-xl' id='email' type="email" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <br />

                    <textarea defaultValue={comment} name='comment' className='w-full h-40 mb-5 border rounded-xl' id="w3review" rows="4" cols="50" placeholder=' write your valueable comment'></textarea>
                </div>
                <button className=" rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default UpdateReviews;