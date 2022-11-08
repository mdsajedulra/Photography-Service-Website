
import indor from '../../assets/indor.jpg'
import slider1 from '../../assets/slider1.png'
import { Button, Card, Carousel } from 'flowbite-react';
import React from 'react';
import './Home.css'

const Home = () => {

    const service = <>
        <div className="max-w-sm">
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={slider1}
            >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                    <svg
                        className="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                        5.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        $599
                    </span>
                    <a
                        href="#"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </Card>
        </div>

    </>

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
            <h1 className='my-5 text-3xl font-semibold text-center'>Service</h1>

            <div className='flex gap-10'>

                {
                    service
                }
                {
                    service
                }
                {
                    service
                }

            </div>
            <Button className='my-5 '>See All</Button>



            <div className='flex flex-col items-center justify-center gap-10 sm:flex-col md:flex-row lg:flex-row '>
                <div className='w-full sm:w-full md:w-1/2 lg:w-1/2'>
                    <h1 className="my-5 text-5xl font-semibold text-left">Best Indoor Photo Studio <br /> Decoration</h1>
                    <p className='text-justify'>We photographers know what we’re looking for when we show up for a shoot, so it’s easy to assume our clients innately understand those needs, too. But the average Joe doesn’t have a clue about the makings of a great portrait, and a little hand-holding will go a long way.
                        <br />
                        <br />
                        Dig into the nitty-gritty of what you expect to find when you arrive – and don’t hesitate to be blunt!</p>
                    <Button className='my-5'>Browse All Services</Button>
                </div>
                <div className='w-1/2'>
                    <img className=' rounded-xl' src={indor} alt="" />
                </div>
            </div>

            {/* contact us seciton */}

            <div className='flex flex-col items-center justify-center h-full gap-5 my-10 bg-gray-400 contact-us rounded-xl dark:bg-gray-700 dark:text-white'>
                <h1 className='text-5xl font-semibold'>Pra Wedding Photo & Video Package</h1>
                <p className='w-5/6 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button className='p-2 border hover:bg-white hover:text-whtie rounded-xl btn'>Contact Us</button>

            </div>

        </div >



    );
};

export default Home;