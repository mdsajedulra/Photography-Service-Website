import google from '../../assets/google.png'
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { authContext } from '../../context/AuthProvider/Authprovider';
import useTitle from '../../useTitle/useTitle';
import { json, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [error, setError] = useState('')

    const { loginUsingEmailPassword, loginUsingGooglePopUp } = useContext(authContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    useTitle('Login')
    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUsingEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('photography', data.token)
                        navigate(from, { replace: true });

                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    const handleGoogleLogin = () => {
        loginUsingGooglePopUp()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('photography', data.token)
                        navigate(from, { replace: true });

                    })




            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='my-20'>
            <h1 className="m-10 text-2xl font-semibold text-center">Log in</h1>
            <form onSubmit={handleForm} className='p-10 mx-auto my-0 border sm:full md:w-full xl:w-2/6 rounded-xl'>
                <div>
                    <div className="block mb-2">
                        <Label
                            htmlFor="email4"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email4"
                        name='email'
                        type="email"
                        placeholder="Enter your Email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="block mb-2">
                        <Label
                            htmlFor="password"
                            value="Password"
                        />
                    </div>
                    <TextInput
                        name='password'
                        id="password"
                        type='password'
                        placeholder="Enter Your Password"
                        required={true}
                    />
                </div>
                <p className='mt-3 text-red-700'>{
                    error.slice(9)
                }</p>
                <Button type='submit' className='w-full my-5'>
                    Login
                </Button>

                <Button onClick={handleGoogleLogin} color="gray" className='w-full'>
                    <img className='w-[25px] m-2' src={google} alt="" />
                    log in with Google
                </Button>

            </form>
        </div>
    );
};

export default Login;