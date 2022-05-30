import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../../Shared/Spinner/Spinner'


const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('https://whispering-bastion-71459.herokuapp.com/user').then(res => res.json()))
    console.log(users)
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h1>All Users : {users.length}</h1>
        </div>
    );
};

export default Users;