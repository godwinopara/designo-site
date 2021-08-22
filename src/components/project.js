import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import arrowLink from "../images/shared/desktop/icon-right-arrow.svg";

const Project = ({
  projectName,
  path,
  mobileImage,
  tabletImage,
  desktopImage,
}) => {
  return (
    <Projects
      mobileImage={mobileImage}
      tabletImage={tabletImage}
      desktopImage={desktopImage}
    >
      <Link to={path} style={{ textDecoration: "none", width: "100%" }}>
        <H2>{projectName}</H2>
        <Para>VIEW PROJECTS</Para>
      </Link>
    </Projects>
  );
};

export default Project;

const Projects = styled.div`
  height: 20.5rem;
  width: 100%;
  background: url(${(props) => props.mobileImage});
  background-position: center;
  background-size: cover;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 2.4rem auto;
  border-radius: 15px;
  text-align: center;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 1);
    opacity: 0.3;
    border-radius: 15px;
  }

  :hover::before {
    background: rgb(231, 129, 107);
  }

  @media screen and (min-width: 768px) {
    background: url(${(props) => props.tabletImage});
    height: 20rem;
  }

  @media screen and (min-width: 1024px) {
    background: url(${(props) => props.desktopImage});
    background-repeat: no-repeat;
    height: 30.8rem;
    display: grid;
  }
`;

const H2 = styled.h2`
  color: rgb(255, 255, 255);
  position: relative;
  letter-spacing: 2px;
  z-index: 10;
  font-size: 2.8rem;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Para = styled.p`
  color: rgb(255, 255, 255);
  position: relative;
  z-index: 1;
  font-size: 1.3rem;
  letter-spacing: 3px;
  margin-top: 2rem;

  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 1px;
    left: 75px;
    background-image: url(${arrowLink});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
