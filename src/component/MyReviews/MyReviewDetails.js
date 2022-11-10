import { Table } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


const MyReviewDetails = ({ review }) => {
    // console.log(review)
    const { comment, email, serviceName, reviewId, userName, _id } = review;
    const handleDelete = (id) => {
        const confirmation = window.confirm("Are your sure delete this review");
        if (confirmation) {
            fetch(`https://photography-by-sajedul-server.vercel.app/deletereview/${id}`, {
                method: 'DELETE'
                // headers: {
                //     'content-type': 'application/json'
                // },
                // body: JSON.stringify(id)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success('Successfully deleted')
                        // alert('succesfully deleted')
                    }
                })
        }
    }
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/updatereviews/${id}`)
    }
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {userName}
            </Table.Cell>
            <Table.Cell>
                {serviceName}
            </Table.Cell>
            <Table.Cell>
                {comment}
            </Table.Cell>
            <Table.Cell>
                {serviceName}
            </Table.Cell>
            <Table.Cell>
                <button
                    onClick={() => handleDelete(_id)}
                    className="mr-4 font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Delete
                </button>
                <button
                    onClick={() => handleEdit(_id)}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Edit
                </button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyReviewDetails;