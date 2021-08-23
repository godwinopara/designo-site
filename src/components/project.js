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
  border-radius: 15px;
  background: url(${(props) => props.mobileImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20.5rem;
  margin: 2.4rem auto;
  position: relative;
  text-align: center;
  width: 100%;

  ::before {
    background: rgba(0, 0, 0, 1);
    border-radius: 15px;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
  }

  :hover::before {
    background: ${({ theme }) => theme.primaryColors.peach};
  }

  @media screen and (min-width: 768px) {
    background: url(${(props) => props.tabletImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 20rem;
  }

  @media screen and (min-width: 1024px) {
    background: url(${(props) => props.desktopImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 30.8rem;
    margin: 0;
  }
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.primaryColors.white};
  font-size: 2.8rem;
  letter-spacing: 2px;
  position: relative;
  z-index: 10;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Para = styled.p`
  color: ${({ theme }) => theme.primaryColors.white};
  font-size: 1.3rem;
  letter-spacing: 3px;
  margin-top: 2rem;
  position: relative;
  z-index: 1;

  ::after {
    background-image: url(${arrowLink});
    background-repeat: no-repeat;
    background-position: center;
    content: "";
    height: 100%;
    left: 75px;
    position: absolute;
    top: 1px;
    width: 100%;
  }
`;
