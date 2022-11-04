import React from "react";
import styled from "styled-components";

export default function end() {
  return (
    <EndWrite>
      끝났어요~!!!!!
      <img src="img/뽀로로인사.png" alt="인사하는 뽀로로 친구들" />
    </EndWrite>
  );
}

const EndWrite = styled.div`
  font-size: 55px;
  font-weight: 900;
  padding: 5%;
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    width: 35%;
    margin: auto;
  }
`;
