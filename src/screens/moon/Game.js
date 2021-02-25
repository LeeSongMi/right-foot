import React from "react";
import styled from "styled-components";
function Game() {
  return (
    <div className="w-100 bg-warning container d-flex flex-column justify-content-around vh-100">
      <div
        id="canvas"
        className="d-flex justify-content-center align-items-center"
      >
        <Man className="man">
          <Arm className="arm">
            <img src="/arm.png" />
          </Arm>
          <Body className="body">
            <img src="/man.png" />
          </Body>
        </Man>
      </div>
    </div>
  );
}
const Man = styled.div`
  height: 90vh;
  position: relative;
  img {
    height: 100%;
  }
`;
const Arm = styled.div`
  height: 30vh;
  top: 10vh;
  right: -17vh;
  position: absolute;
  z-index: 10;

  @keyframes armRotate {
    from {
      transform-origin: 100% 100%;
      transform: rotate(-50deg);
    }

    to {
      transform: rotate(35deg);
      transform-origin: 100% 100%;
    }
  }

  img {
    /* transition: all ease 1s; */
    animation-duration: 1s;
    animation-name: armRotate;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  img:hover {
  }
`;
const Body = styled.div`
  height: 60vh;
  z-index: 20;
  position: absolute;
  top: 20vh;
`;

export default Game;
