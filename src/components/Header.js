import React from "react";
import styled from "styled-components";
const Head = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: #00adc2;
  display: flex;
  justify-content: center;
  margin: 40px;
`;

const Header = () => {
  return (
    <>
      <Head>Save The Money</Head>
    </>
  );
};

export default Header;
