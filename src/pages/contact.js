import React, { useState } from "react";
import styled from "styled-components";
import DesignoBranch from "../components/designoBranches";
import { allImages } from "../components/images";
import Layout from "../components/layout";

const Contact = () => {
  const [inputName, setinputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputPhoneNumber, setinputPhoneNumber] = useState("");
  const [inputMessage, setinputMessage] = useState("");

  /* Errors  */
  const [showNameInputError, setshowNameInputError] = useState(false);
  const [showPhoneNumberInputError, setshowPhoneNumberInputError] =
    useState(false);
  const [showEmailInputError, setshowEmailInputError] = useState(false);
  const [showMessageInputError, setshowMessageInputError] = useState(false);

  const handleNameChange = (e) => {
    setinputName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setinputEmail(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setinputPhoneNumber(e.target.value);
  };
  const handleMessageChange = (e) => {
    setinputMessage(e.target.value);
  };

  /* show ERRORS FOR ANY EMPTY INPUT FIELD */

  const showError = (input, showError) => {
    if (input !== "") {
      showError(false);
    } else if (input === "") {
      showError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    showError(inputEmail, setshowEmailInputError);

    showError(inputName, setshowNameInputError);
    showError(inputPhoneNumber, setshowPhoneNumberInputError);

    showError(inputMessage, setshowMessageInputError);
  };

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
            <Form action="" noValidate onSubmit={handleSubmit}>
              <FormControl>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={handleNameChange}
                  value={inputName}
                />
                {showNameInputError && (
                  <span className="error-message">Can't be empty</span>
                )}
              </FormControl>
              <FormControl>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={handleEmailChange}
                  value={inputEmail}
                />
                {showEmailInputError && (
                  <span className="error-message">Can't be empty</span>
                )}
              </FormControl>
              <FormControl>
                <label htmlFor="phone number">Phone</label>
                <input
                  type="number"
                  name="phone number"
                  id="phone"
                  required
                  onChange={handleChangePhoneNumber}
                  value={inputPhoneNumber}
                />
                {showPhoneNumberInputError && (
                  <span className="error-message">Can't be empty</span>
                )}
              </FormControl>
              <FormControl>
                <label htmlFor="name">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  required
                  onChange={handleMessageChange}
                  value={inputMessage}
                ></textarea>
                {showMessageInputError && (
                  <span className="error-message">Can't be empty</span>
                )}
              </FormControl>
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
  background: url(${allImages.contactPageImages.heroBackgroundMobile});
  background-position: 20% 2%;
  background-color: ${({ theme }) => theme.primaryColors.peach};
  padding: 7.2rem 0;

  @media screen and (min-width: 768px) {
    background-image: url(${allImages.contactPageImages.heroBackgroundDesktop});
    background-position: -15% 1%;
    background-size: 70%;
    background-repeat: no-repeat;
    border-radius: 15px;
  }

  @media screen and (min-width: 1024px) {
    background-position: -15% 100%;
  }
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
  position: relative;

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

  input:focus {
    border-bottom: 3px solid ${({ theme }) => theme.primaryColors.white};
  }
  textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primaryColors.white};
    width: 100%;
    outline: none;
    color: inherit;
  }
  textarea:focus {
    border-bottom: 3px solid ${({ theme }) => theme.primaryColors.white};
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

const FormControl = styled.div`
  position: relative;

  .error-message {
    background-image: url(${allImages.contactPageImages.iconError});
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize.verySmall};
    padding-right: 40px;
    right: 0;
    top: 0;
  }
`;
