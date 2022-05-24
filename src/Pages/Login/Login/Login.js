import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-primary text-white shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Login!</h2>
                    <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
                       
                        <input className="input input-bordered w-full max-w-xs mt-2" type='email' placeholder='Your Email' {...register('email', { required: true })} /> <br />
                        {errors.lastName && <p>Email is required.</p>}
                        <input className="input input-bordered w-full max-w-xs mt-2" type='password' placeholder='Password' {...register('password')} />
                        <input className='btn bg-secondary w-full max-w-xs mt-2 text-black font-bold' type="submit" value="Login" />
                        
                    </form>
                    <p><small>Don't have an account? <Link className='text-accent' to='/register'>Please Create a new account</Link></small></p>
                    <div class="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;