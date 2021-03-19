/** @jsx jsx */
import { jsx } from "theme-ui";
//import React from "react";
import { Link } from "gatsby";

const bodyStyles = {
  mx: `2rem`,
  padding: `1rem`,
};

const LayOut = ({ children }) => {
  return (
    <div sx={bodyStyles}>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>My footer</p>
      </footer>
    </div>
  );
};
export default LayOut;
