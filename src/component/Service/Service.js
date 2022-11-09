import { Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { title, img, price, description, _id } = service;
    console.log(title)
    return (
        <div>

            <div className="max-w-sm">
                <Card

                >
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='w-full rounded-xl' src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </a>
                    <div className="mt-2.5 mb-5">
                        <div className='flex justify-between'>
                            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                Rating 5.0
                            </span>
                            <span className="text-2xl text-gray-900 dark:text-white">
                                Price {price}
                            </span>
                        </div>
                        <br />
                        <span>{
                            (description.length > 100) ?
                                <>
                                    {description.slice(0, 100) + "..."}
                                    <br />
                                    <br />
                                    <Link
                                        to={`/service/${_id}`}
                                        className="mt-5 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View Details
                                    </Link>
                                </>
                                : description

                        }</span>
                    </div>
                    <div className="flex items-center justify-between">


                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Service;