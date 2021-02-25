import React from "react";
import styled from "styled-components";

const Play = () => {
  return (
    <>
      <h3 className="w-100 text-center">딱지를 내려쳐라!</h3>

      <Body className="Body d-flex">
        <br />
        <Arm></Arm>
      </Body>
    </>
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
const Arm = styled.div`
  background: pink;
  width: 300px;
  height: 100px;
`;
export default Play;
