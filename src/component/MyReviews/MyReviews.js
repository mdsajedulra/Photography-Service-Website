import { async } from '@firebase/util';
import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthProvider/Authprovider';
import MyReviewDetails from './MyReviewDetails';

const MyReviews = () => {
    const { user } = useContext(authContext);
    // console.log(user?.email)

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    // console.log(review)
    return (
        <div>
            {
                (reviews.length === 0) ? <><p className='p-56 text-center'>No reviews were added</p></> :
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
            }

        </div>
    );
};

export default MyReviews;