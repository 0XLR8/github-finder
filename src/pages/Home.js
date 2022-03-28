import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import { useContext, useEffect } from "react";
import UserContext from "../context/user/UserContext";
import { TailSpin } from "react-loader-spinner";

const Home = () => {

    const { users, pending, error } = useContext(UserContext);

    return(
        <div className="home py-4 container flex-grow-1 d-flex flex-column justify-content-center">
            <SearchBar />
            { pending && <div className="load-handler"><TailSpin color="#FFF" height={50} width={50} /></div> }
            { users && users.length === 0 && !pending && <div className="load-handler"><h2 className="message">No users found.</h2></div> }
            { error && <div className="load-handler"><h2 className="message">There was an error.<br/>Try again later.</h2></div> }
            { users && !error && !pending && <UserList /> }
        </div>
    )
}

export default Home;