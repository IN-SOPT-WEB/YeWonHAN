import React from "react";
import styled from "styled-components";

export default function score(props) {
  return (
    <Score>
      {/* <div>{props.currentQuizNum}번 문제</div> */}
      <div>
        {props.quizNum} 점 만점에 {props.score} 점!
      </div>
    </Score>
  );
}

const Score = styled.div`
  text-align: center;
  background-color: #dfdfdf4b;
  font-weight: 700;
  padding: 1%;
`;
