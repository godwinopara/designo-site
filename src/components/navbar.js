import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const handleIsNavOpen = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <Navigation className="container">
      <Link to="/">
        <StaticImage
          layout="fixed"
          width={202}
          src="../images/shared/desktop/logo-dark.png"
          alt="company logo"
        />
      </Link>
      <NavLink className={isNavOpen ? "active" : ""}>
        <li>
          <LinkTag to="/about">OUR COMPANY</LinkTag>
        </li>
        <li>
          <LinkTag to="/location">LOCATION</LinkTag>
        </li>
        <li>
          <LinkTag to="/contact">CONTACT</LinkTag>
        </li>
      </NavLink>
      <Hamburger onClick={handleIsNavOpen}>
        {!isNavOpen && (
          <StaticImage
            layout="fixed"
            src="../images/shared/mobile/icon-hamburger.svg"
            alt="hamburger menu"
          />
        )}
        {isNavOpen && (
          <StaticImage
            layout="fixed"
            src="../images/shared/mobile/icon-close.svg"
            alt="close icon"
          />
        )}
      </Hamburger>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem auto;
`;

const Hamburger = styled.div`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const LinkTag = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;

const NavLink = styled.ul`
  display: none;
  position: fixed;

  &.active {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    width: 50%;

    li {
      margin: auto 0 auto auto;
      list-style: none;
      font-size: ${({ theme }) => theme.fontSize.verySmall};
      font-weight: 400;
    }
    li:hover {
      text-decoration: underline;
    }

    &.active {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    li {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;
