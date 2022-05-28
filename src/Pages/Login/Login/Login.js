import React, { useEffect } from 'react';
import google from '../../../Images/logo/google.png'

import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

import useToken from '../../../hooks/useToken';




const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEamilAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

 let signInError; 
 const navigate = useNavigate();
 const location= useLocation();
 let from= location.state?.from?.pathname || "/";
 
 
 useEffect(()=> {
    if(token) {
        navigate(from, {replace:true});
    }
   
}) 
 
if(loading || gLoading){
    return <Spinner></Spinner>
}
if(error || gError){
    signInError = <p className='text-red-500'> { error?.message || gError.message}</p>
}
    
      
    
    const onSubmit = (data) => {
        console.log(data)
        signInWithEamilAndPassword(data.email, data.password)
    };



    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-primary text-white shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Login!</h2>
                    <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>

                        <input className="input text-black input-bordered w-full max-w-xs mt-2" type='email' placeholder='Your Email' {...register('email', { required: true })} /> <br />
                        {errors.lastName && <p>Email is required.</p>}
                        <input className="input input-bordered w-full max-w-xs text-black mt-2" type='password' placeholder='Password' {...register('password')} />
                        <input className='btn bg-secondary w-full max-w-xs mt-2 text-black font-bold' type="submit" value="Login" />
                        {signInError}

                    </form>
                    <p><small>Don't have an account? <Link className='text-accent' to='/register'>Please Create a new account</Link></small></p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className='btn btn-secondary font-bold'> <img className='w-5 h-5 mr-1' src={google} alt="" /> Continue With Google</button>

                </div>
            </div>
        </div>


    );
};

export default Login;