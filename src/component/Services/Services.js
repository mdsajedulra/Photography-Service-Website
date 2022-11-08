import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
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