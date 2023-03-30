import React from "react";
import styled from "styled-components";
import Switch from "./Switch";

const Section = () => {
  return (
    <Container>
      <Main>
        <Img>
          <img src="image1.png" alt="" />
        </Img>
        <Text>
          <p>產品型號12345678</p>
          <h3>產品名稱 TMA-2 STUDIO</h3>
          <p className="text">
            產品介紹 Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.產品介紹 Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC, making it over
            2000 years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.
          </p>
        </Text>
        <Switch />
      </Main>
    </Container>
  );
};

export default Section;

const Container = styled.div`
  background-color: #ffffff;
  width: 1200px;
  margin: 10px auto;
`;
const Main = styled.div`
  display: flex;
  height: 600px;
  position: relative;
`;
const Img = styled.div`
  background-color: #6cb3af;
  flex: 1;

  img {
    object-fit: cover;
    height: 100%;
    margin: auto 36px;
  }
`;

const Text = styled.div`
  padding: 40px;
  flex: 1;
  overflow: hidden;
  p {
    margin-bottom: 10px;
  }
  h3 {
    color: #c1b494;
    margin-bottom: 20px;
  }
  .text {
    line-height: 28px;
    letter-spacing: 0.01em;
  }
`;
