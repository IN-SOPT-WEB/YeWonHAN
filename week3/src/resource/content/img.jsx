import React from "react";
import styled from "styled-components";

export default function img(props) {
  return (
    <>
      <QuizNum> {props.currentQuizNum} 번 문제</QuizNum>
      <CharacterImg>
        <img src={props.img} alt={props.imgAlt} />
      </CharacterImg>
    </>
  );
}

const CharacterImg = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: -30px;

  img {
    height: 250px;
  }
`;

const QuizNum = styled.div`
  text-align: center; ;
`;
