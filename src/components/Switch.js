import React from "react";
import styled from "styled-components";
const Switch = () => {
  return (
    <Container>
      <ul>
        <li>
          <img src="images-outline.png" alt="" />
          <span>photo</span>
        </li>
        <li>
          <img src="Frame.png" alt="" />
          <span>360</span>
        </li>
        <li>
          <img src="Path.png" alt="" />
          <span>3D</span>
        </li>
      </ul>
    </Container>
  );
};

export default Switch;
const Container = styled.div`
  position: absolute;
  bottom: 5%;
  left: 10%;
  width: auto;
  ul {
    display: flex;
    list-style: none;

    li {
      padding: 10px 20px;
      width: auto;
      background-color: rgba(255, 255, 255, 0);
      border: 1px solid #c1b494;
      color: #c1b494;
      img {
        vertical-align: middle;
        display: inline-block;
        color: #ffffff;
        padding-right: 5px;
      }
      span {
        vertical-align: middle;
        display: inline-block;
      }
      &:hover,
      &:focus,
      &:active {
        cursor: pointer;
        background-color: #c1b494;
        color: #ffffff;
      }
      :nth-child(1) {
        background-color: #c1b494;
        color: #ffffff;
      }
      :nth-child(2) {
        background: rgba(255, 255, 255, 0.1);
        border: 1.5px solid #c1b494;
        backdrop-filter: blur(15px);
      }
      :nth-child(3) {
        background: rgba(255, 255, 255, 0.1);
        border: 1.5px solid #c1b494;
        backdrop-filter: blur(15px);
      }
    }
  }
`;
