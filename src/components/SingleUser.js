import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io"; 
import { BsFillPeopleFill } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { AiFillShop } from "react-icons/ai";
import { useEffect, useState } from "react";
import RepoItem from "./RepoItem";

const SingleUser = ({user}) => {

    const [repo, setRepo] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try{
                const res = await fetch(user.repos_url);
                if(res.ok){
                    let data = await res.json()
                    data.forEach(value => {
                        value.created_at = toTimestamp(value.created_at)
                        return value;
                    })
                    data.sort((a, b) => b.created_at - a.created_at)
                    setRepo(data.filter((value, index) => index < 5))
                    console.log(data);
                }else{
                    throw new Error()
                }
            }catch(er){
                console.log(er)
            }
        }
        fetchRepos();
    }, [user.repos_url])

    const toTimestamp = (strDate) => {
        var datum = Date.parse(strDate);
        return datum/1000;
     }

    return(
        <div className="single-user container py-5">
            <Link to="/" className="d-block mb-4">BACK TO SEARCH</Link>
            <div className="d-flex flex-row justify-content-between mb-5">
                <div className="single-avatar me-5 p-4 d-flex flex-column justify-content-end" style={{backgroundImage: `url(${user.avatar_url})`}}>
                    <h2>{user.name ? user.name : user.login}</h2>
                    <p>{user.name ? user.login : null}</p>
                </div>
                <div className="single-details flex-grow-1">
                    <div className="d-flex flex-row align-items-center">
                        <h1 className="mb-2">{user.name ? user.name : user.login}</h1>
                        <span className="single-type">{user.type}</span>
                        <span className={user.hireable ? "single-hire" : "single-not-hire"}>{user.hireable ? "Hireable" : "Not Hireable"}</span>
                    </div>
                    <p>{user.bio}</p>
                    <a href={`${user.html_url}`} rel="noreferrer" target="_blank" className="d-inline-block my-4">VISIT GITHUB PROFILE</a>
                    <div className="single-border p-3 d-flex flex-row justify-content-between">
                        <div className="misc-item">
                            <p className="single-slim">Location</p>
                            <h2>{user.location ? user.location : "N/A"}</h2>
                        </div>
                        <div className="misc-item">
                            <p className="single-slim">Website</p>
                            <h2 style={{wordBreak: "break-all"}}>{user.blog ? user.blog : "N/A"}</h2>
                        </div>
                        <div className="misc-item">
                            <p className="single-slim">Twitter</p>
                            <h2>{user.twitter_username ? user.twitter_username : "N/A"}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-border mb-5 py-3 d-flex flex-row justify-content-center">
                <div className="stats-item">
                    <div>
                        <p className="single-slim">Followers</p>
                        <h1>{user.followers}</h1>
                    </div>
                    <IoIosPeople className="stats-icon" />
                </div>
                <div className="stats-item">
                    <div>
                        <p className="single-slim">Following</p>
                        <h1>{user.following}</h1>
                    </div>
                    <BsFillPeopleFill className="stats-icon" />
                </div>
                <div className="stats-item">
                    <div>
                        <p className="single-slim">Public Repos</p>
                        <h1>{user.public_repos}</h1>
                    </div>
                    <BiCube className="stats-icon" />
                </div>
                <div className="stats-item">
                    <div>
                        <p className="single-slim">Public Gists</p>
                        <h1>{user.public_gists}</h1>
                    </div>
                    <AiFillShop className="stats-icon" />
                </div>
            </div>
            <div className="px-4">
                <h1 className="mb-3">Latest Respositories</h1>
                { repo && repo.map(value => {
                    return <RepoItem key={value.id} repo={value} />
                })}
            </div>
        </div>
    )
}

export default SingleUser;