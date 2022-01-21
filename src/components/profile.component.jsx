import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
    const { user } = useAuth0();

    return(
        <div>
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>

                <pre>
                    {JSON.stringify(user)}
                </pre>
            </div>
        </div>
    );
}

export default Profile;