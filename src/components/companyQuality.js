import React from "react";
import styled from "styled-components";
import circleDesignPattern from "../images/shared/desktop/bg-pattern-small-circle.svg";
const CompanyQuality = ({ imgSrc, heading, text }) => {
  return (
    <Quality>
      <img src={imgSrc} alt="" />
      <figcaption className="details">
        <CompanyQualityHeading>{heading}</CompanyQualityHeading>
        <p>{text}</p>
      </figcaption>
    </Quality>
  );
};

export default CompanyQuality;

const Quality = styled.figure`
  margin: 8rem auto;
  position: relative;
  z-index: 10;

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${circleDesignPattern});
    background-repeat: no-repeat;
    background-position: top;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    text-align: left;
    img {
      margin-right: 5rem;
      position: relative;
    }

    ::after {
      background-position: left;
    }
  }

  @media screen and (min-width: 1024px) {
    display: block;
    text-align: center;
    width: 30%;

    ::after {
      background-position: top;
    }

    img {
      margin-right: 0;
    }
  }
`;

const CompanyQualityHeading = styled.h3`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin: 3rem auto;
`;
