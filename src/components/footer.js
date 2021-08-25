import React from "react";
import Button from "./button";
import facebook from "../images/shared/desktop/icon-facebook.svg";
import twitter from "../images/shared/desktop/icon-twitter.svg";
import pinterest from "../images/shared/desktop/icon-pinterest.svg";
import youtube from "../images/shared/desktop/icon-youtube.svg";
import instagram from "../images/shared/desktop/icon-instagram.svg";
import calltoaction from "../images/shared/desktop/bg-pattern-call-to-action.svg";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";

const footer = () => {
  return (
    <Footer>
      <div className="container">
        <ContactUs className="container">
          <div className="contact-us-container">
            <div className="contact-us-text">
              <h2>
                Let’s talk about <br /> your project
              </h2>
              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <Button text="GET IN TOUCH" />
          </div>
        </ContactUs>
        <FooterContent>
          <FooterNav>
            <StaticImage
              layout="fixed"
              width={202}
              src="../images/shared/desktop/logo-light.png"
              alt="company logo"
            />
            <ul>
              <li>
                <FooterLink to="/about">OUR COMPANY</FooterLink>
              </li>
              <li>
                <FooterLink to="/locations">LOCATIONS</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">CONTACT</FooterLink>
              </li>
            </ul>
          </FooterNav>
          <FooterContactInfo>
            <CompanyAddress>
              <strong>Designo Central Office</strong>
              <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
              <br />
            </CompanyAddress>

            <CompanyAddress>
              <strong>Contact Us (Central Office)</strong>
              <br />
              P : +1 253-863-8967
              <br />
              M : contact@designo.co
              <br />
            </CompanyAddress>
            <CompanySocialMedia>
              <img src={facebook} alt="facebook icon" />
              <img src={youtube} alt="youtube icon" />
              <img src={twitter} alt="twitter icon" />
              <img src={pinterest} alt="pinterest icon" />
              <img src={instagram} alt="instagram icon" />
            </CompanySocialMedia>
          </FooterContactInfo>
        </FooterContent>
      </div>
    </Footer>
  );
};

export default footer;

const Footer = styled.footer`
  background: ${({ theme }) => theme.primaryColors.black};
  color: ${({ theme }) => theme.primaryColors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 38rem;
  position: relative;
  padding: 5rem 0;

  @media screen and (min-width: 1024px) {
    margin-top: 33rem;
  }
`;

const ContactUs = styled.div`
  background: ${({ theme }) => theme.primaryColors.peach};
  background-image: url(${calltoaction});
  background-position: right;
  background-repeat: no-repeat;
  bottom: 75%;
  border-radius: 15px;
  color: ${({ theme }) => theme.primaryColors.white};
  left: 0;
  margin: auto;
  padding: 5rem 1rem;
  position: absolute;
  right: 0;
  text-align: center;
  width: 90%;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 1.2;
    margin: 2rem 0;
  }

  p {
    line-height: 26px;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: ${({ theme }) => theme.fontSize.large};
    }
    p {
      max-width: 70%;
      margin: 1rem auto;
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }

  @media screen and (min-width: 1024px) {
    text-align: left;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.miniLarge};
    }

    p {
      margin: 0;
    }

    .contact-us-container {
      width: 80%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 0;
    }

    .contact-us-text {
      width: 60%;
    }
  }
`;

const FooterContent = styled.div`
  margin-top: 25rem;

  @media screen and (min-width: 768px) {
    margin-top: 20rem;
  }
`;

const FooterNav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  ul {
    list-style: none;
    text-align: center;
    margin-top: 3rem;
  }

  ::before {
    background: ${({ theme }) => theme.primaryColors.white};
    content: "";
    opacity: 0.2;
    position: absolute;
    height: 1px;
    top: 25%;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      margin: 0;
      width: 55%;

      li {
        margin-left: auto;
      }
    }

    ::before {
      top: 140%;
    }
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.primaryColors.white};
  display: block;
  font-size: ${({ theme }) => theme.fontSize.verySmall};
  letter-spacing: 2px;
  margin: 1.8rem 0;
  text-decoration: none;
`;

const FooterContactInfo = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 3rem auto;
    text-align: left;
  }
`;

const CompanyAddress = styled.div`
  margin-top: 3rem;
  opacity: 0.5;
`;

const CompanySocialMedia = styled.div`
  margin-top: 3rem;
  img {
    opacity: 0.7;
    cursor: pointer;
  }

  img:hover {
    opacity: 1;
  }

  img + img {
    margin-left: 2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 35%;
    text-align: right;
  }
`;
