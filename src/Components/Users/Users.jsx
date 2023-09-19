import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './../User/user.css'

const Users = () => {

    const users = useLoaderData();



    // console.log(users)

    return (
        <div>
            <h3>about our users</h3>
            <h4>Users:{users.length}</h4>

            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;