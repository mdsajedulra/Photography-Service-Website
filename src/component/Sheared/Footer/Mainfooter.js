import { Footer } from 'flowbite-react';
import logo from '../../../logo.png'
import React from 'react';

const Mainfooter = () => {
    return (
        <div className='border-t-2'>
            <Footer container={true}>
                <img className='w-28' src={logo} alt="" />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        About
                    </Footer.Link>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
};

export default Mainfooter;