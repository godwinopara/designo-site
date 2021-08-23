import React from "react";
import styled from "styled-components";

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

  @media screen and (min-width: 768px) {
    display: flex;
    text-align: left;
    img {
      margin-right: 5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    display: block;
    text-align: center;
    width: 30%;

    img {
      margin-right: 0;
    }
  }
`;

const CompanyQualityHeading = styled.h3`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};
  letter-spacing: 5px;
  margin: 3rem auto;
`;
