import React, { useRef } from "react";
import styled from "styled-components";
const Play = () => {
  const timing = useRef(10);

  return (
    <>
      <h3 className="w-100 text-center">딱지를 내려쳐라!</h3>
      <Body className="Body position-relative">
        <Arm
          className="arm position-absolute"
          src={"/arm.png"}
          timing={timing}
        />
        <Man className="man position-absolute" src={"/man.png"} />
      </Body>
    </>
  );
};
const Body = styled.div`
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  background: pink;

  .header {
    text-align: center;
    font-size: 30px;
  }
`;
const Arm = styled.img`
  height: 30vh;
  left: 40%;
  top: 10%;
  transform-origin: 100% 100%;
  transform: rotate(30deg);
`;

const Man = styled.img`
  height: 75vh;
  left: 50%;
  top: 10%;
`;
export default Play;
