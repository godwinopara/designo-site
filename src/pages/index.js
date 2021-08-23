import React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import styled from "styled-components";
import Project from "../components/project";
import { allImages } from "../components/images";
import CompanyQuality from "../components/companyQuality";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout>
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
  background-image: url(${allImages.homepageImages.heroPhoneImage});
  background-position: 50% 220%;
  background-size: 90%;
  background-repeat: no-repeat;
  color: white;
  min-height: 100vh;
  position: relative;
  width: 100%;

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
    background-position: 50% 630%;
    border-radius: 15px;
    padding: 0 1rem;
    width: 90%;
    min-height: 90vh;

    ::before {
      background-position: 150% 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    background-position: 100% 5%;
    background-size: 50%;
    display: flex;
    min-height: 90vh;
    text-align: left;

    ::before {
      background-position: 90% 50%;
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
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const HeaderHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: normal;
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
  z-index: 10;

  @media screen and (min-width: 768px) {
    width: 85%;
    margin: auto auto 2rem;
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
  }
`;

const CompanyQualities = styled.section`
  margin-top: 10rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
