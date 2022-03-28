import { useContext } from "react";
import UserContext from "../context/user/UserContext";
import User from "./User";

const UserList = () => {

    const { users } = useContext(UserContext);

    return(
        <div className="d-flex flex-wrap justify-content-center">
            { 
                users.map(value => <User key={value.id} user={value} />)
            }
        </div>
    )
}

export default UserList;