import { useContext, useState } from "react";
import UserContext from "../context/user/UserContext";

const SearchBar = () => {

    const [text, setText] = useState("");

    const { users, handleSearchUser, handleClear } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text !== ""){
            if(e.nativeEvent.submitter.innerText === "GO"){
                handleSearchUser(text);
                setText("");
            }
        }
        if(e.nativeEvent.submitter.innerText === "Clear"){
            console.log(2)
            handleClear();
        }
    }

    return(
            <form className="d-flex mb-5 mt-3 align-self-center" onSubmit={handleSubmit}>
                <input className="w-75" type="text" placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} />
                <button className="search-btn w-25">GO</button>
                { users && <button className="clear-btn ms-3">Clear</button> }
            </form>
    )
}

export default SearchBar;