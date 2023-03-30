import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <img className="close" src="Vector.png" alt="" />
      <Header />
      <Section />
    </Container>
  );
};

export default Homepage;
const Container = styled.div`
  margin: auto;
  background: rgba(193, 180, 148, 0.9);
  backdrop-filter: blur(15px);
  height: 100vh;
  position: relative;
  .close {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 30px;
    color: #ffffff;
    cursor: pointer;
  }
`;
