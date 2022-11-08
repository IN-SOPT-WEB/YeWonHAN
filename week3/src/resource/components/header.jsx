import styled from "styled-components";

export default function Header() {
  return <Title>너의 이름은</Title>;
}

const Title = styled.h3`
  background-color: #db8fff91;
  color: white;
  text-align: center;
  font-weight: 900;
  text-shadow: 1px 1px 2px #000;
  padding: 1%;
  margin: 0px;
`;
