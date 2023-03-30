import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <b>X</b>
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
  b {
    position: absolute;
    top: 15px;
    right: 30px;
    font-size: 45px;
    color: #ffffff;
    cursor: pointer;
  }
`;
