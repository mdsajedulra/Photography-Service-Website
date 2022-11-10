import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://photography-by-sajedul-server.vercel.app/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 gap-10 xl:grid-cols-3 md:grid-cols-2'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="m-5 text-center">
                <Link to='/allservices' className='p-3 text-white bg-blue-700 rounded-lg'>See All</Link>
            </div>

        </div>
    );
};

export default Services;