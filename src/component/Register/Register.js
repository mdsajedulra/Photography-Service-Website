import google from '../../assets/google.png'
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { authContext } from '../../context/AuthProvider/Authprovider';
import useTitle from '../../useTitle/useTitle';

const Register = () => {
    // dynamic title
    useTitle('Register')


    const { registerUsingEmailPassword, loginUsingGooglePopUp } = useContext(authContext)

    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        registerUsingEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
            <h1 className="m-10 text-2xl font-semibold text-center">Register</h1>
            <form onSubmit={handleForm} className='w-2/6 mx-auto my-0'>
                <div>
                    <div className="block mb-2">
                        <Label
                            htmlFor="fullname"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        id="email4"
                        name='name'
                        type="text"
                        placeholder="Full Name"
                        required={true}
                    />
                </div>
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
                    Register with Google
                </Button>

            </form>
        </div>
    );
};

export default Register;