import { FaCode } from "react-icons/fa";

const RepoItem = ({repo}) =>{
    return(
        <div className="repo p-4">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
                <h2 className="mb-2"><FaCode className="icon"/> {repo.name}</h2>
                <p>{repo.description ? repo.description : "No description available."}</p>
            </a>
        </div>
    )
} 

export default RepoItem;