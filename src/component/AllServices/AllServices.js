import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allservice')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className='my-20'>
            <h2 className='m-5 text-xl font-semibold text-center' >All Services</h2>
            <div className='grid w-full grid-cols-1 gap-10 justify-items-center md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;