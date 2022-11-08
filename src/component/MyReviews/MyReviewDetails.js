import { Table } from 'flowbite-react';
import React from 'react';

const MyReviewDetails = ({ review }) => {
    console.log(review)
    const { comment, email, serviceName, reviewId, userName, _id } = review;
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

                    className="mr-4 font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Edit
                </button>
                <button

                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Update
                </button>
            </Table.Cell>
        </Table.Row>

    );
};

export default MyReviewDetails;