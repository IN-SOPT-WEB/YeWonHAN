import React from "react";
import styled from "styled-components";

export default function returnPage() {
  const clickReset = () => {
    window.location.replace("/");
  };

  return (
    <ReturnBtn>
      <button onClick={() => clickReset()}>다시하기</button>
    </ReturnBtn>
  );
}

const ReturnBtn = styled.div`
  text-align: center;
  button {
    background-color: #db10ffc8;
    color: #fffffff7;
    text-shadow: 1px 1px 1px #000;
    font-weight: 900;
    width: 100%;
    border: none;
    padding: 3%;
    margin-top: 15px;
  }
`;
