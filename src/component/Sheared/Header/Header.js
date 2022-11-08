import logo from '../../../logo.png'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(authContext);
    const handleLogout = () => {
        logOut()
            .then(result => {
                const usr = result.user;
                console.log(usr)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='shadow-lg'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <Link to='/'>

                        <img
                            src={logo}
                            className="h-6 mr-3 sm:h-9"
                            alt="Flowbite Logo"
                        />
                    </Link>
                    {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Flowbite
                    </span> */}
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ?
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="block text-sm font-medium truncate">
                                        {user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    Dashboard
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Earnings
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                            :
                            <>

                                <Link to='/login' className='p-2 mr-3 text-white bg-blue-700 border rounded-xl'>Login</Link>
                                <Link to='/register' className='p-2 border border-blue-700 rounded-xl hover:bg-blue-700 hover:text-white '>Register</Link>

                            </>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {
                        user ?
                            <>
                                <Navbar.Link
                                    active={true}
                                >
                                    <Link to='/'>Home</Link>
                                </Navbar.Link>
                                <Navbar.Link>
                                    <Link to='myreviews'>
                                        My Reviews
                                    </Link>
                                </Navbar.Link>
                                <Navbar.Link href="/navbars">
                                    <Link to="addservices">
                                        Add Service
                                    </Link>
                                </Navbar.Link>
                                <Navbar.Link href="/navbars">
                                    Contact
                                </Navbar.Link>
                            </>
                            :
                            <>
                                <Navbar.Link
                                    active={true}
                                >
                                    <Link to='/'>Home</Link>
                                </Navbar.Link>
                            </>
                    }

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;