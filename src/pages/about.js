import React from "react";
import Layout from "../components/layout";
import AboutPageHook from "../components/aboutPageHook";
import { allImages } from "../components/images";
import styled from "styled-components";
import DesignoBranch from "../components/designoBranches";

const About = () => {
  return (
    <Layout pageTitle="About Us | Designo">
      <Main className="container">
        <AboutHero>
          <AboutPageHook
            primary="primary"
            desktopImg={allImages.aboutPageImages.aboutPageHeroImage}
            tabletImg={allImages.aboutPageImages.aboutPageHeroImageTablet}
            mobileImg={allImages.aboutPageImages.aboutPageHeroImage}
            heading="About Us"
            firstPara="
        Founded in 2010, we are a creative agency that produces lasting
        results for our clients. We’ve partnered with many startups, corporations,
        and nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences that
        connect with our clients' audiences."
          />
        </AboutHero>
        <section>
          <AboutPageHook
            desktopImg={allImages.aboutPageImages.worldClassTalent}
            tabletImg={allImages.aboutPageImages.worldClassTalentTablet}
            mobileImg={allImages.aboutPageImages.worldClassTalent}
            heading="World-class talent"
            firstPara="
        We are a crew of strategists, problem-solvers, and technologists. Every
        design is thoughtfully crafted from concept to launch, ensuring success in
        its given market. We are constantly updating our skills in a myriad of
        platforms."
            secondPara="
        Our team is multi-disciplinary and we are not merely interested in form —
        content and meaning are just as important. We give great importance to
        craftsmanship, service, and prompt delivery. Clients have always been
        impressed with our high-quality outcomes that encapsulates their brand’s
        story and mission."
          />
        </section>

        {/* ******************************************** */}
        <>
          <DesignoBranch />
        </>
        {/* *********************************************** */}
        <section>
          <AboutPageHook
            secondary="secondary"
            desktopImg={allImages.aboutPageImages.realDealImage}
            tabletImg={allImages.aboutPageImages.realDealImageTablet}
            mobileImg={allImages.aboutPageImages.realDealImage}
            heading="The real deal"
            firstPara=" 
        As strategic partners in our clients’ businesses, we are
        ready to take on any challenge as our own. Solving real problems require
        empathy and collaboration, and we strive to bring a fresh perspective to
        every opportunity. We make design and technology more accessible and give
        you tools to measure success."
            secondPara="
        We are visual storytellers in appealing and captivating ways. By combining
        business and marketing strategies, we inspire audiences to take action and
        drive real results."
          />
        </section>
      </Main>
    </Layout>
  );
};

export default About;

const Main = styled.main`
  width: 100%;
  margin-top: 3rem;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

const AboutHero = styled.section`
  @media screen and (min-width: 1200px) {
    ::before {
      content: "";
      position: absolute;
      top: 40%;
      left: 0;
      height: 100%;
      width: 100%;
      background: url(${allImages.shared.leafBackgroundPattern});
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
`;
