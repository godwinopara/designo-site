import React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import styled from "styled-components";
import Project from "../components/project";
import { allImages } from "../components/images";

const HomePage = () => {
  return (
    <Layout>
      <HeaderHero>
        <HeaderHeading>
          Award-winning custom designs and digital branding solutions
        </HeaderHeading>
        <Headertext>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Headertext>
        <Button text="LEARN MORE" />
      </HeaderHero>
      <main>
        <Projects className="container">
          <Project
            path="/web-design"
            projectName="WEB DESIGN"
            desktopImage={allImages.homepageImages.webDesignDesktopImg}
            tabletImage={allImages.homepageImages.webDesignTabletImg}
            mobileImage={allImages.homepageImages.webDesignMobileImg}
          />
          <Project
            path="/app-design"
            projectName="APP DESIGN"
            desktopImage={allImages.homepageImages.appDesignDesktopImg}
            tabletImage={allImages.homepageImages.appDesignTabletImg}
            mobileImage={allImages.homepageImages.appDesignMobileImg}
          />
          <Project
            path="/graphic-design"
            projectName="GRAPHIC DESIGN"
            desktopImage={allImages.homepageImages.graphicDesignDesktopImg}
            tabletImage={allImages.homepageImages.graphicDesignTabletImg}
            mobileImage={allImages.homepageImages.graphicDesignMobileImg}
          />
        </Projects>
      </main>
    </Layout>
  );
};

export default HomePage;

const HeaderHero = styled.header`
  background-color: ${({ theme }) => theme.primaryColors.peach};
  background-image: url(${allImages.homepageImages.heroPhoneImage});
  background-position: 50% 220%;
  background-size: 90%;
  background-repeat: no-repeat;
  color: white;
  min-height: 100vh;
  position: relative;
  padding: 1rem;
  text-align: center;

  ::before {
    background-image: url(${allImages.homepageImages.heroBackgroundPattern});
    background-repeat: no-repeat;
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    background-size: 85%;
    background-position: 50% 650%;
  }
`;

const HeaderHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.medium};
  letter-spacing: 1px;
  margin: 6rem auto 3rem;
  position: relative;
  z-index: 10;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.extraLarge};
    width: 85%;
  }
`;

const Headertext = styled.p`
  position: relative;
  z-index: 10;

  @media screen and (min-width: 768px) {
    width: 70%;
    margin: auto auto 2rem;
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
`;

const Projects = styled.section`
  margin-top: 10rem;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);

    div:first-child {
      grid-row: span 2;
      height: 100%;
    }
  }
`;
