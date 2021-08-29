import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const handleIsNavOpen = () => {
    setisNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.documentElement.style.overflowY = "hidden";
    }
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [isNavOpen]);

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
      <NavLink className={isNavOpen ? "navOpen" : ""}>
        <li>
          <LinkTag to="/about">OUR COMPANY</LinkTag>
        </li>
        <li>
          <LinkTag to="/locations">LOCATION</LinkTag>
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
  @media screen and (min-width: 768px) {
    :hover {
      text-decoration: underline;
    }
  }
`;

const NavLink = styled.ul`
  display: none;
  background: ${({ theme }) => theme.primaryColors.black};
  list-style: none;

  &.navOpen {
    position: fixed;
    left: 0;
    top: 85px;
    height: 233px;
    width: 100%;
    display: block;
    color: white;
    z-index: 100;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 2.4rem;

    li {
      font-size: 2.4rem;
      line-height: 25px;
      letter-spacing: 2px;
      margin-bottom: 3.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    width: 50%;
    background: transparent;

    li {
      margin: auto 0 auto auto;
      list-style: none;
      font-size: ${({ theme }) => theme.fontSize.verySmall};
      font-weight: 400;
    }
    li:hover {
      text-decoration: underline;
    }

    &.navOpen {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    li {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;
