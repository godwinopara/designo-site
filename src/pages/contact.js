import React from "react";
import styled from "styled-components";
import DesignoBranch from "../components/designoBranches";
import { allImages } from "../components/images";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout pageTitle="Contact Us | Designo">
      <Main className="container">
        <ContactInformations>
          <Container>
            <ContactDetails>
              <h1>Contact Us</h1>
              <p>
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </ContactDetails>
            <Form action="">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="phone" name="phone" id="phone" required />
              </div>
              <div>
                <label htmlFor="name">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </Form>
          </Container>
        </ContactInformations>
        {/* ********************************************
            DESIGNO BRANCHES
      **********************************************/}
        <DesignoBranch />
        {/* ********************************************
         ******************************************** */}
      </Main>
    </Layout>
  );
};

export default Contact;

const Main = styled.main`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

const ContactInformations = styled.section`
  background-color: ${({ theme }) => theme.primaryColors.peach};
  padding: 7.2rem 0;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ContactDetails = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.primaryColors.white};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 36px;
    margin-bottom: 2.4rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 26px;
    margin-bottom: 4.8rem;
  }

  @media screen and (min-width: 768px) {
    text-align: left;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.extraLarge};
      line-height: 48px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 45%;
  }
`;

const Form = styled.form`
  color: white;
  width: 100%;
  label {
    display: block;
    opacity: 0.5;
    margin-bottom: 1.1rem;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.verySmall};
    line-height: 26px;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primaryColors.white};
    width: 100%;
    outline: none;
    color: inherit;
    margin-bottom: 2.3rem;
    font-size: 15px;
    line-height: 26px;
  }
  textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primaryColors.white};
    width: 100%;
    outline: none;
    color: inherit;
  }

  button {
    margin: auto;
    margin-top: 4rem;
    border: none;
    padding: 1.8rem 4rem 1.6rem;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.verySmall};
    line-height: 22px;
    text-transform: uppercase;
    border-radius: 8px;
    background: ${({ theme }) => theme.primaryColors.white};
    cursor: pointer;
    display: block;

    :hover {
      background: ${({ theme }) => theme.secondaryColors.lightPeach};
      color: ${({ theme }) => theme.primaryColors.white};
    }
  }

  @media screen and (min-width: 768px) {
    button {
      margin: 4rem 0 0 auto;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;
