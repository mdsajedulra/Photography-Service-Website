import React from 'react';
import useTitle from '../../useTitle/useTitle';

const AddServices = () => {
    useTitle('Add Service')

    const handleAddServiceForm = event => {
        event.preventDefault();
        const form = event.target;
        const service = {
            title: form.title.value,
            img: form.img.value,
            price: form.price.value,
            description: form.description.value
        }
        console.log(service)
        fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
    }
    return (
        <div>
            <form onSubmit={handleAddServiceForm} className='my-10'>
                <h1 className='my-6 text-3xl font-semibold'>Add Service</h1>
                <div>
                    <label htmlFor="title">Title</label>
                    <br />
                    <input name='title' className='w-full mb-5 border rounded-xl' type="text" placeholder='Service Title' id='name' />
                </div>
                <div>
                    <label htmlFor="img">Image URL</label>
                    <br />
                    <input name='img' className='w-full mb-5 border rounded-xl' id='img' type="text" placeholder='Upload image URL' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <br />
                    <input name='price' className='w-full mb-5 border rounded-xl' id='price' type="text" placeholder='Service price' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <br />

                    <textarea name='description' className='w-full h-40 mb-5 border rounded-xl' id="description" rows="4" cols="50" placeholder='Write prodcut description'></textarea>
                </div>
                <button className=" rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddServices;