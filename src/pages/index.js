import React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import styled from "styled-components";
import Project from "../components/project";
import webDesignLargeImage from "../images/home/desktop/image-web-design-large.jpg";
import webDesignMobileImage from "../images/home/mobile/image-web-design.jpg";
import webDesignTabletImage from "../images/home/tablet/image-web-design.jpg";
import appDesignImage from "../images/home/desktop/image-app-design.jpg";
import appDesignTabletImage from "../images/home/tablet/image-app-design.jpg";
import appDesignMobileImage from "../images/home/mobile/image-app-design.jpg";
import graphicDesignImage from "../images/home/desktop/image-graphic-design.jpg";
import graphicDesignTabletImage from "../images/home/tablet/image-graphic-design.jpg";
import graphicDesignMobileImage from "../images/home/mobile/image-graphic-design.jpg";

const HomePage = () => {
  return (
    <Layout>
      <header>
        <HeaderHero>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button text="LEARN MORE" />
        </HeaderHero>
      </header>
      <main>
        <Projects className="container">
          <Project
            path="/web-design"
            projectName="WEB DESIGN"
            desktopImage={webDesignLargeImage}
            tabletImage={webDesignTabletImage}
            mobileImage={webDesignMobileImage}
          />
          <Project
            path="/app-design"
            projectName="APP DESIGN"
            desktopImage={appDesignImage}
            tabletImage={appDesignTabletImage}
            mobileImage={appDesignMobileImage}
          />
          <Project
            path="/graphic-design"
            projectName="GRAPHIC DESIGN"
            desktopImage={graphicDesignImage}
            tabletImage={graphicDesignTabletImage}
            mobileImage={graphicDesignMobileImage}
          />
        </Projects>
      </main>
    </Layout>
  );
};

export default HomePage;

const HeaderHero = styled.div`
  min-height: 85vh;
`;

const Projects = styled.section`
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
