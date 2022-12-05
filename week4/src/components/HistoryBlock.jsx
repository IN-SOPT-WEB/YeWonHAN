import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function HistoryBlock(props, { userId }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const url = "https://api.github.com/users/" + userId;
    fetch(url)
      .then((results) => {
        if (results.ok) return results.json();
      })
      .then((props) => {
        setSearch(props.userId);
      });
  }, []);

  return (
    <>
      <Pop>최근 검색 : {props.userId}</Pop>
    </>
  );
}

const Pop = styled.div`
  font-size: 10px;
  padding: 10px;
`;
