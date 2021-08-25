import React from "react";
import styled from "styled-components";
import Button from "./button";
import { allImages } from "./images";

const DesignoBranches = ({ img, location }) => {
  return (
    <Container>
      <img src={img} alt="Designo branches logos" />
      <figcaption className="call-to-action">
        <Heading>{location}</Heading>
        <Button text="SEE LOCATION" primary />
      </figcaption>
    </Container>
  );
};

export default DesignoBranches;

const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${allImages.shared.smallCirclesBackgroundPattern});
    background-repeat: no-repeat;
    background-position: top;
  }
`;

const Heading = styled.h3`
  letter-spacing: 5px;
  font-size: 2rem;
  line-height: 26px;
  font-weight: 500;
  margin: 3rem auto 2rem;
`;
