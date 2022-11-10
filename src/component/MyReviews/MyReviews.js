import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthProvider/Authprovider';
import useTitle from '../../useTitle/useTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReviews = () => {
    useTitle('My Reviews') // page dynaic title

    const { user } = useContext(authContext);
    // console.log(user?.email)

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [reviews])
    // console.log(review)
    return (
        <div className='my-10'>
            {
                (reviews.length === 0) ? <><p className='p-56 text-center'>No reviews were added</p></> :
                    <>
                        <h1 className='m-5 text-2xl font-semibold text-center '>You can see your all reviews</h1>

                        <Table striped={true}>

                            <Table.Head>
                                <Table.HeadCell>
                                    User Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Service Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Review
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Service Name
                                </Table.HeadCell>

                                <Table.HeadCell>
                                    Action
                                </Table.HeadCell>


                            </Table.Head>
                            <Table.Body className="divide-y">

                                {
                                    reviews.map(review => <MyReviewDetails key={review._id} review={review}></MyReviewDetails>)
                                }
                            </Table.Body>
                        </Table>
                    </>

            }

        </div>
    );
};

export default MyReviews;