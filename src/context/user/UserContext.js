import { createContext, useCallback, useState } from "react";

const UserContext = createContext();


const gitURL = process.env.REACT_APP_GITHUB_URL;
const gitTOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const UserProvider = ({children}) => {

    const [users, setUsers] = useState(null);
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

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
                    setPending(false);
                    setUsers(data.items);
                }else{
                    throw new Error();
                }
            }
            catch(er){
                console.log(er);
                setPending(false);
                setError(true);
            }
        }
        setTimeout(() => {
            timeout()
        }, 1000)
    }

    const fetchSingleUser = useCallback((user) => {
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
                    setUser(data);
                    setPending(false);
                }else{
                    throw new Error();
                }
            }
            catch(er){
                console.log(er);
                setPending(false);
                setError(true);
            }
        }
        setTimeout(() => {
            timeout()
        }, 1000)
    }, [])

    const setLoading = () => {
        setPending(true);
    }

    const handleSearchUser = (text) => {
        fetchUsers(text);
    }

    const handleClear = () => {
        setUsers(null)
    }

    return(
        <UserContext.Provider value={{
            user: user,
            users: users,
            pending: pending,
            error: error,
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