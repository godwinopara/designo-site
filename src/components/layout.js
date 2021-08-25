import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import "../styles/globalstyles.css";
import { ThemeProvider } from "styled-components";
const theme = {
  font: {
    fontFamily: "jost",
  },

  fontSize: {
    extraLarge: "4.8rem",
    miniLarge: "4rem",
    large: "3.5rem",
    medium: "3rem",
    normal: "2rem",
    small: "1.6rem",
    verySmall: "1.5rem",
  },

  primaryColors: {
    peach: "rgb(231,129,107)",
    black: "rgb(29, 28, 30)",
    white: "rgb(255, 255, 255)",
  },

  secondaryColors: {
    veryLightPeach: "rgba(253, 243, 240)",
    lightPeach: "rgb(255, 173, 155)",
    darkGrey: "rgb(51, 49, 54)",
    lightGrey: "rgb(241, 243, 245)",
  },
};

const Layout = ({ children, pageTitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <title>{pageTitle}</title>
      <header>
        <NavBar />
      </header>
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
