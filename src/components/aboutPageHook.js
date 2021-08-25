import React from "react";
import styled, { css } from "styled-components";
import circlePatternBackground from "../images/shared/desktop/bg-pattern-two-circles.svg";
import { allImages } from "./images";

const AboutPageHook = ({
  desktopImg,
  tabletImg,
  mobileImg,
  alt,
  heading,
  firstPara,
  secondPara,
  primary,
  secondary,
}) => {
  return (
    <Container primary={primary} secondary={secondary}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopImg} />
        <source media="(min-width: 768px)" srcSet={tabletImg} />
        <img src={mobileImg} alt={alt} />
      </picture>
      <PageDetails primary={primary} secondary={secondary}>
        <div className="pageDetails-container">
          <h2>{heading}</h2>
          <p>{firstPara}</p>
          <p>{secondPara}</p>
        </div>
      </PageDetails>
    </Container>
  );
};

export default AboutPageHook;

const Container = styled.div`
  text-align: center;

  picture {
    display: flex;
    justify-content: center;
    img {
      display: inline-block;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12rem;

    picture {
      img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    text-align: left;
    height: 60.4rem;

    picture {
      img {
        border-radius: 0;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
      }
    }
  }

  ${(props) =>
    props.primary &&
    css`
      @media screen and (min-width: 1024px) {
        flex-direction: row-reverse;
        height: 40rem;

        picture {
          width: 35%;

          img {
            border-radius: 0;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
          }
        }
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      @media screen and (min-width: 1024px) {
        flex-direction: row-reverse;

        picture {
          img {
            border-radius: 0;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
          }
        }
      }
    `}
`;

const PageDetails = styled.div`
  background: url(${circlePatternBackground});
  background-color: ${({ theme }) => theme.secondaryColors.veryLightPeach};
  color: ${({ theme }) => theme.secondaryColors.darkGrey};
  padding: 8rem 2.4rem;

  h2 {
    color: ${({ theme }) => theme.primaryColors.peach};
    margin-bottom: 3rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 36px;
    font-weight: 500;
  }

  p {
    line-height: 25px;
  }

  p + p {
    margin-top: 3rem;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    h2 {
      font-size: 4rem;
      line-height: 48px;
    }
    .pageDetails-container {
      width: 90%;
      margin: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
    display: flex;
    align-items: center;
    height: 60.4rem;
    padding: 8rem 9rem;
    width: 65%;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: ${({ theme }) => theme.primaryColors.peach};
      background-image: url(${allImages.aboutPageImages
        .aboutPageHeroBackgroundMobile});
      background-repeat: no-repeat;
      background-position: 40% 25%;
      color: ${({ theme }) => theme.primaryColors.white};

      h2 {
        color: ${({ theme }) => theme.primaryColors.white};
      }

      @media screen and (min-width: 768px) {
        background-size: 250%;
        background-position: 120% 23%;
      }

      @media screen and (min-width: 1024px) {
        background-position: 120% 10%;
        background-size: 250%;
        height: 40rem;
        border-radius: 0;
        border-bottom-left-radius: 15px;
        border-top-left-radius: 15px;
        width: 65%;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      @media screen and (min-width: 1024px) {
        border-radius: 0;
        border-bottom-left-radius: 15px;
        border-top-left-radius: 15px;
      }
    `}
`;
