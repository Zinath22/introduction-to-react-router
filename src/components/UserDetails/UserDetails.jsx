import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website, email} = user;
    return (
        <div>
            <h2>Details about user:{name}</h2>
            <p>Website:{website}</p>
            <p>email:{email}</p>
        </div>
    );
};

export default UserDetails;