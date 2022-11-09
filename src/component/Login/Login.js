import google from '../../assets/google.png'
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { authContext } from '../../context/AuthProvider/Authprovider';
import useTitle from '../../useTitle/useTitle';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
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
            })
            .catch(error => console.log(error))
    }
    const handleGoogleLogin = () => {

        loginUsingGooglePopUp()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='mt-20'>
            <h1 className="m-10 text-2xl font-semibold text-center">Log in</h1>
            <form onSubmit={handleForm} className='w-2/6 mx-auto my-0'>
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
                        placeholder="Enter Your Password"
                        required={true}
                    />
                </div>
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