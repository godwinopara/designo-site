import React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import styled from "styled-components";
import Project from "../components/project";
import { allImages } from "../components/images";
import CompanyQuality from "../components/companyQuality";

const HomePage = () => {
  return (
    <Layout pageTitle="Designo | Home ">
      <HeaderHero className="container">
        <HeaderContainer>
          <HeaderHeading>
            Award-winning custom designs and digital branding solutions
          </HeaderHeading>
          <Headertext>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </Headertext>
          <Button text="LEARN MORE" />
        </HeaderContainer>
        <div className="hero-img"></div>
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
        <CompanyQualities className="company-qualities container">
          <CompanyQuality
            imgSrc={allImages.homepageImages.passionateIllustration}
            heading="PASSIONATE"
            text="
             Each project starts with an in-depth brand research to ensure we
             only create products that serve a purpose. We merge art, design,
             and technology into exciting new solutions.
              "
          />
          <CompanyQuality
            imgSrc={allImages.homepageImages.resourcefulIllustration}
            heading="RESOURCEFUL"
            text="
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer
            collaboration. It guarantees superior results that fulfill our
            clients’ needs.
            "
          />
          <CompanyQuality
            imgSrc={allImages.homepageImages.friendlyIllustration}
            heading="FRIENDLY"
            text="
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
            "
          />
        </CompanyQualities>
      </main>
    </Layout>
  );
};

export default HomePage;

const HeaderHero = styled.header`
  background-color: ${({ theme }) => theme.primaryColors.peach};
  background-image: url(${allImages.homepageImages.heroBackgroundPattern});
  color: ${({ theme }) => theme.primaryColors.white};
  background-repeat: no-repeat;
  min-height: 95vh;
  position: relative;
  width: 100%;
  z-index: 50;

  .hero-img {
    background-color: transparent;
    background: url(${allImages.homepageImages.heroPhoneImage});
    background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 50vh;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    border-radius: 15px;
    background-repeat: no-repeat;
    background-position: right;
    padding: 0 1rem;
    width: 90%;

    .hero-img {
      min-height: 60vh;
      background-position: 50% 30%;
      background-size: 80%;
    }
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    display: flex;
    align-items: center;
    text-align: left;

    .hero-img {
      width: 40%;
      background-size: cover;
      background-position: 120%;
      height: 80vh;
    }
  }
`;

const HeaderContainer = styled.div`
  padding: 1rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    margin-right: auto;
    padding: 0;
    padding-left: 5rem;
    text-align: left;
    width: 60%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const HeaderHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 5rem auto 3rem;
  line-height: 1.2;
  position: relative;
  z-index: 10;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.extraLarge};
    width: 85%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Headertext = styled.p`
  position: relative;
  margin: auto auto 2rem;
  z-index: 10;

  @media screen and (min-width: 768px) {
    width: 85%;
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
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

    ::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: -20%;
      top: 45%;
      background-image: url(${allImages.homepageImages.leafBackgroundPattern});
      background-position: bottom;
      background-repeat: no-repeat;
      overflow: hidden;
    }
  }
`;

const CompanyQualities = styled.section`
  margin-top: 10rem;
  text-align: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10rem;

    ::after {
      content: "";
      position: absolute;
      background-image: url(${allImages.homepageImages.leafBackgroundPattern});
      left: 0;
      top: 40%;
      left: 25%;
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
    }
  }
`;
