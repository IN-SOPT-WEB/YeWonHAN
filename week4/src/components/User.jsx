//Github API 정보 load 컴포넌트
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
// loading을 위한 import - "yarn add react-spinners"
import ClipLoader from "react-spinners/ClipLoader";

function User({ username, onReset }) {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // api 불러오기
  useEffect(() => {
    const url = "https://api.github.com/users/" + username;
    fetch(url)
      .then((results) => {
        if (results.ok) return results.json();
      })
      .then((data) => {
        setName(data.name);
        setAvatarUrl(data.avatar_url);
        setLocation(data.location);
        setRepos(data.public_repos);
        setFollowing(data.following);
        setFollowers(data.followers);
        setIsLoading(true);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      {error === true && <Notice>유저를 찾을 수 없습니다.</Notice>}

      {(name && (
        <>
          <UserHaeder>
            Github User Search
            <button onClick={onReset}>X</button>
          </UserHaeder>
          <UserImg>
            <img src={avatarUrl} className="image" alt={avatarUrl} />
          </UserImg>
          <Information>
            <div className="username">🧡{username}🧡</div>
            <div>{name}</div>
            <div>{location}</div>
            <hr />
            <div> 😀 repo : {repos} </div>
            <div> 😀 following : {following} </div>
            <div> 😀 follower : {followers} </div>
          </Information>
        </>
      )) ||
        (error === false && (
          <>
            <ClipLoader color="black" size={60} loading />
          </>
        ))}
    </>
  );
}

export default User;

const Notice = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: red;
  padding: 25px;
`;

const UserHaeder = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: purple;
  padding: 10px;

  button {
    border: none;
    background-color: white;
  }
  button:hover {
    cursor: pointer;
  }
`;

const UserImg = styled.div`
  img {
    width: 150px;
  }
`;

const Information = styled.div`
  font-size: 10px;
  padding-bottom: 25px;
  padding-top: 25px;
  background-color: pink;
  border-radius: 50px;
  width: 50%;
  margin: auto;
  margin-bottom: 100px;
  margin-top: 8px;

  .username {
    font-size: 12px;
    font-weight: 500;
  }
  hr {
    width: 30%;
  }
`;
