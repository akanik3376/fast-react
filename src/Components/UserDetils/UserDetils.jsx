import { useLoaderData } from "react-router-dom";

const UserDetils = () => {
    const userDetils = useLoaderData()
    const { name, username, email, id } = userDetils
    return (
        <div>
            <h1>User Details: id {id}</h1>
            <h2>Name: {name}</h2>
            <h4>Nike Name: {username}</h4>
            <h3>Nike Name: {email}</h3>


        </div>
    );
};

export default UserDetils;