import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { _id, img, title, description } = services;
    console.log(services)
    return (
        <div className='w-1/2 mx-auto my-10'>
            <img className='w-full text-center rounded-xl' src={img} alt="" />
            <h1 className="my-3 text-2xl font-semibold">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ServiceDetails;