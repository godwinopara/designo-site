import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const handleIsNavOpen = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <Navigation className="container">
      <div className="logo">
        <StaticImage
          layout="fixed"
          width={202}
          src="../images/shared/desktop/logo-dark.png"
          alt="company logo"
        />
      </div>
      <NavLink className={isNavOpen ? "active" : ""}>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
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

const NavLink = styled.ul`
  display: none;
  position: fixed;

  &.active {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: block;
    position: static;

    &.active {
      display: none;
    }
  }
`;
