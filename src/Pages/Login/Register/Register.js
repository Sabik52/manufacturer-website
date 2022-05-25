import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
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
                <h2 class="card-title">Please Register!</h2>
                <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
                    <input className="input input-bordered w-full max-w-xs text-black " type='text' placeholder='Your Name' {...register('firstName')} /> <br />
                    <input className="input input-bordered w-full max-w-xs mt-2 text-black" type='email' placeholder='Your Email' {...register('email', { required: true })} /> <br />
                    {errors.lastName && <p>Email is required.</p>}
                    <input className="input input-bordered w-full max-w-xs mt-2 text-black" type='password' placeholder='Password' {...register('password')} />
                    <input className='btn bg-secondary w-full max-w-xs mt-2  font-bold text-black' type="submit" value="Register" />
                    
                </form>
                <p><small>Already have an account? <Link className='text-accent' to='/login'>Please Login</Link></small></p>
                <div class="card-actions justify-end">
                    
                </div>
            </div>
        </div>
    </div>

    );
};

export default Register;