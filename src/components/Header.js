import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <ul>
        <li>PRODUCT</li>
        <li>VIDEO</li>
        <li>CATALOG</li>
        <li>EXPLORE MORE</li>
      </ul>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: auto;
  width: 1200px;
  ul {
    margin: auto 200px;

    height: 100px;
    align-items: center;
    display: flex;
    list-style: none;
    justify-content: space-between;
    li {
      color: #ffffff;
      padding: 20px;
      :hover {
        cursor: pointer;
        border-bottom: 1px solid #ffffff;
      }
    }
  }
`;
