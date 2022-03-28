import { Link } from "react-router-dom";

const User = ({user}) => {

    return(
        <div className="user">
            <Link className="d-flex flex-column align-items-center" to={`/user/${user.login}`}>
                <img alt={`Avatar_${user.id}`} src={user.avatar_url}/>
                <p className="user-name">{user.login}</p>
            </Link>
        </div>
    )
}

export default User;