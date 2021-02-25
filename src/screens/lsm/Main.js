import React from "react";
import styled from "styled-components";
const Main = () => {
  return (
    <Body className="Body d-flex ">
      <p className="header w-100">왼손으로 그리고, 발로 코딩</p>
      <br />
      <button>딱지 치기</button>
    </Body>
  );
};

const Body = styled.div`
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  .header {
    text-align: center;
    font-size: 30px;
  }
`;
export default Main;
