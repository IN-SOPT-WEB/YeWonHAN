//검색창 컴포넌트
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function Search({ value, onChange, onClick }) {
  // enter 입력 시 click 이벤트와 같도록 설정
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClick();
    }
  };

  const ref = useRef();
  useEffect(() => {
    ref.currrent = value;
  });

  return (
    <>
      <InputBox>
        <input
          type="text"
          placeholder="깃허브 아이디를 넣어봐!"
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={value}
        />
        <Button onClick={onClick}>
          <img src="돋보기.png" alt="돋보기" />
        </Button>
      </InputBox>
    </>
  );
}

export default Search;

const InputBox = styled.div`
  height: 40px;
  padding: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: aliceblue;

  input {
    text-align: center;
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 30px;
  background-color: #efc3ef;
  border-radius: 3px;
  border: none;
  margin-left: 1px;
  img {
    width: 15px;
  }
`;
