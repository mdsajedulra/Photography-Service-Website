
import indor from '../../assets/indor.jpg'
import slider1 from '../../assets/slider1.png'
import { Button, Card, Carousel } from 'flowbite-react';
import React from 'react';
import './Home.css'
import Services from '../Services/Services';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // sm:h-64 xl:h-80 2xl:h-96
        <div>

            <div className="my-10 h-96 ">
                <Carousel>
                    <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className='relative w-full h-screen opacity-80' src={slider1} alt="" />
                        <div className='absolute'>
                            <h1 className='text-6xl font-semibold text-center text-white'>Make your wedding a <br /> wonderful story.</h1>
                        </div>
                    </div>

                </Carousel>
            </div>

            <div className='my-20 '>
                <h1 className='my-5 text-3xl font-semibold text-center'>Service</h1>
                <div className='flex justify-center gap-10'>
                    <Services></Services>
                </div>
            </div>



            <div className='flex flex-col items-center justify-center gap-10 my-20 sm:flex-col md:flex-row lg:flex-row '>
                <div className='w-full sm:w-full md:w-1/2 lg:w-1/2'>
                    <h1 className="my-5 text-4xl font-semibold text-left">Best Indoor Photo Studio <br /> Decoration</h1>
                    <p className='text-justify'>We photographers know what we’re looking for when we show up for a shoot, so it’s easy to assume our clients innately understand those needs, too. But the average Joe doesn’t have a clue about the makings of a great portrait, and a little hand-holding will go a long way.
                        <br />
                        <br />
                        Dig into the nitty-gritty of what you expect to find when you arrive – and don’t hesitate to be blunt!</p>
                    <Button className='my-5'>
                        <Link to='/allservices'>Browse All Services</Link>
                    </Button>
                </div>
                <div className='w-1/2'>
                    <img className=' rounded-xl' src={indor} alt="" />
                </div>
            </div>

            {/* contact us seciton */}

            <div className='flex flex-col items-center justify-center h-full gap-5 my-10 my-20 bg-gray-400 contact-us rounded-xl dark:bg-gray-700 dark:text-white'>
                <h1 className='text-4xl font-semibold'>Pra Wedding Photo & Video Package</h1>
                <p className='w-5/6 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button className='p-2 border hover:bg-white hover:text-whtie rounded-xl btn'>Contact Us</button>

            </div>

        </div >



    );
};

export default Home;