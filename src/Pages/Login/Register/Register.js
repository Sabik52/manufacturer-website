
import React from 'react';
import google from '../../../Images/logo/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Spinner from '../../Shared/Spinner/Spinner';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    const navigate = useNavigate();

    let registerError;
    if (loading || updating || gLoading) {
        return <Spinner></Spinner>
    }
    if (error || updateError || gError) {
        registerError = <p className='text-red-500'> {error?.message || updateError?.message}</p>
    }
    if (token) {

        navigate('/tools')
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
        console.log('profile update successfully')


    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-primary text-white shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Register!</h2>
                    <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
                        <input required className="input input-bordered w-full max-w-xs text-black " type='text' placeholder='Your Name' {...register('name')} /> <br />
                        <input required className="input input-bordered w-full max-w-xs mt-2 text-black" type='email' placeholder='Your Email' {...register('email', { required: true })} /> <br />
                        {errors.lastName && <p>Email is required.</p>}
                        <input required className="input input-bordered w-full max-w-xs mt-2 text-black" type='password' placeholder='Password' {...register('password')} />
                        <input className='btn bg-secondary w-full max-w-xs mt-2  font-bold text-black' type="submit" value="Register" />

                    </form>
                    <p><small>Already have an account? <Link className='text-accent' to='/login'>Please Login</Link></small></p>
                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className='btn btn-secondary font-bold'> <img className='w-5 h-5 mr-1' src={google} alt="" /> Continue With Google</button>
                </div>
            </div>
        </div>

    );
};

export default Register;