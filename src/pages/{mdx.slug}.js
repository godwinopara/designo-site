import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import styled from "styled-components";

const Hero = styled.section`
  min-height: 252px;
  background: ${({ theme }) => theme.primaryColors.peach};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9.6rem;
  color: ${({ theme }) => theme.primaryColors.white};
  background-image: url(${({ mobileBackgroundImg }) => mobileBackgroundImg});
  background-position: 40% 0;
  background-repeat: no-repeat;
  background-size: 220%;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: 2.4rem;
    line-height: 36px;
  }

  p {
    width: 70%;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 1110px;
    margin: auto;
    border-radius: 15px;
    background-image: url(${({ tabletBackgroundImg }) => tabletBackgroundImg});
    background-position: center;
    background-size: cover;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.extraLarge};
      line-height: 48px;
    }

    p {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${({ desktopBgImg }) => desktopBgImg});
    background-size: 75%;
    background-position: right;
    background-repeat: no-repeat;
  }
`;

const Projects = ({ data }) => {
  console.log(data.mdx.frontmatter);
  return (
    <Layout>
      <main>
        <Hero
          mobileBackgroundImg={
            data.mdx.frontmatter.mobileBackgroundImg.publicURL
          }
          tabletBackgroundImg={
            data.mdx.frontmatter.tabletBackgroundImg.publicURL
          }
          desktopBgImg={data.mdx.frontmatter.desktopBackgroundImg.publicURL}
        >
          <div>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.frontmatter.intro}</p>
          </div>
        </Hero>
        <MDXRenderer className="container">{data.mdx.body}</MDXRenderer>
      </main>
    </Layout>
  );
};

export default Projects;

export const guery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        intro
        title
        desktopBackgroundImg {
          publicURL
        }
        mobileBackgroundImg {
          publicURL
        }
        tabletBackgroundImg {
          publicURL
        }
      }
    }
  }
`;
