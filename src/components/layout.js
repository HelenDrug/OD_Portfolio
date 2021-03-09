import React from "react";
import { Link } from "gatsby";

const LayOut = ({ children }) => {
  return (
    <div>
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
