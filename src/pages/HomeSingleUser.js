import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import { TailSpin } from "react-loader-spinner";
import SingleUser from "../components/SingleUser";

const HomeSingleUser = () => {
    
    const { login } = useParams();
 
    const { user, pending, error, fetchSingleUser } = useContext(UserContext);

    useEffect(() => {
        fetchSingleUser(login)
    },[])

    return(
        <div className="flex-grow-1 d-flex flex-column justify-content-center">
            { pending && <div className="load-handler"><TailSpin color="#FFF" height={50} width={50} /></div> }
            { error && <div className="load-handler"><h2 className="message">There was an error.<br/>Try again later.</h2></div> }
            { user && !error && !pending && <SingleUser user={user}/>
            }
        </div>
    )
}

export default HomeSingleUser;