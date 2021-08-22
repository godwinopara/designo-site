import * as React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import "../styles/globalstyles.css"



const Layout = ({ children, pageTitle }) => {
	return (
		<>
			<title>{pageTitle}</title>
			<header>
				<NavBar />
			</header>
			{children}
			<Footer />
		</>
	);
};

export default Layout;
