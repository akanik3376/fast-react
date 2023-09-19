/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './user.css'

const User = ({ user }) => {
    // console.log(user)
    const { name, email, username, id } = user

    return (
        <div className="user">
            <h2>{name}</h2>
            <span>{username}</span>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;