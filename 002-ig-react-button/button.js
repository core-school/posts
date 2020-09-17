import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const Button = styled.a`
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-size: 1.5em;
  text-transform: uppercase;
  padding: 10px 25px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;
  text-decoration:none;
  &:hover{
    background: white;
    color:#fb6942;
  }
`;

const AppStyled = styled.div`
  background: #fb6942;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  flex-wrap: wrap;
`;

const App = () => (
  <AppStyled>
    <Button href="https://coreof.tech" target="_blank">Apply Now</Button>
  </AppStyled>
);

ReactDom.render(<App />, document.getElementById("root"));
