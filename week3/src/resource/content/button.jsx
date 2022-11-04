import React, { useState } from "react";
import styled from "styled-components";

export default function button(props) {
  return (
    <>
      <PersonImg>
        <img src={props.img} alt={props.imgAlt} />
      </PersonImg>
      <PickBtn>
        <button
          onClick={() => {
            props.handleAnswerOptionClick(props.inco);
          }}
        >
          {props.option}
        </button>
      </PickBtn>
    </>
  );
}

const PersonImg = styled.div`
  width: 100%;
  text-align: center;
`;

const PickBtn = styled.div`
  text-align: center;
  padding: 1%;
  margin-top: 10px;

  button {
    border: none;
    background-color: #ffdd6ec5;
    font-weight: 600;
    font-size: 13px;
    border-radius: 10px;
    margin-right: 5px;
    margin-top: -50px;
    margin-bottom: -50px;
    width: 40%;
    padding: 20px 100px 20px 100px;
  }
`;
