import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext();


const gitURL = process.env.REACT_APP_GITHUB_URL;
const gitTOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const UserProvider = ({children}) => {

    const initialState = {
        users: null,
        user: null,
        pending: false,
        error: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const fetchUsers = (user) => {
        setLoading();
        const timeout = async () => {
            try{
                const res = await fetch(`${gitURL}search/users?q=${user}`, {
                    headers: {
                        Authorization: `token ${gitTOKEN}`
                    }
                });
                if(res.ok){
                    const data = await res.json();
                    console.log(data.items);
                    dispatch({
                        type: "GET_USERS",
                        payload: data.items
                    })
                }else{
                    throw new Error();
                }
            }
            catch(er){
                console.log(er);
                dispatch({
                    type: "FAIL_USERS"
                })
            }
        }
        setTimeout(() => {
            timeout()
        }, 1000)
    }

    const fetchSingleUser = (user) => {
        setLoading();
        const timeout = async () => {
            try{
                const res = await fetch(`${gitURL}users/${user}`, {
                    headers: {
                        Authorization: `token ${gitTOKEN}`
                    }
                });
                if(res.ok){
                    const data = await res.json();
                    console.log(data);
                    dispatch({
                        type: "GET_USER",
                        payload: data
                    })
                }else{
                    throw new Error();
                }
            }
            catch(er){
                console.log(er);
                dispatch({
                    type: "FAIL_USERS"
                })
            }
        }
        setTimeout(() => {
            timeout()
        }, 1000)
    }

    const setLoading = () => {
        dispatch({
            type: "SET_LOADING"
        })
    }

    const handleSearchUser = (text) => {
        fetchUsers(text);
    }

    const handleClear = () => {
        dispatch({
            type: "CLEAR_USERS"
        })
        console.log(state.users);
    }

    return(
        <UserContext.Provider value={{
            user: state.user,
            users: state.users,
            pending: state.pending,
            error: state.error,
            fetchUsers,
            fetchSingleUser,
            handleSearchUser,
            handleClear
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;