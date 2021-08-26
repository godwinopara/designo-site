import React from "react";
import styled from "styled-components";
import Button from "./button";
import { allImages } from "./images";

const DesignoBranch = () => {
  return (
    <DesignoBranchesWorldWide>
      <Container>
        <img
          src={allImages.shared.canadaIllustration}
          alt="Designo branches in Canada illustration"
        />
        <figcaption className="call-to-action">
          <Heading>CANADA</Heading>
          <Button path="/locations" text="SEE LOCATION" primary="primary" />
        </figcaption>
      </Container>
      <Container>
        <img
          src={allImages.shared.canadaIllustration}
          alt="Designo branches in Canada illustration"
        />
        <figcaption className="call-to-action">
          <Heading>AUSTRALIA</Heading>
          <Button path="/locations" text="SEE LOCATION" primary="primary" />
        </figcaption>
      </Container>
      <Container>
        <img
          src={allImages.shared.unitedKingdomIllustration}
          alt="Designo branches in United Kingdom illustration"
        />
        <figcaption className="call-to-action">
          <Heading>UNITED KINGDOM</Heading>
          <Button path="/locations" text="SEE LOCATION" primary="primary" />
        </figcaption>
      </Container>
    </DesignoBranchesWorldWide>
  );
};

export default DesignoBranch;

const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 5rem;

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

const DesignoBranchesWorldWide = styled.section`
  text-align: center;
  margin: 12rem auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    ::after {
      content: "";
      height: 100%;
      width: 100%;
      background: url(${allImages.shared.leafBackgroundPattern});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      top: 65%;
      right: -22%;
      position: absolute;
      z-index: -1;
    }
  }
`;
