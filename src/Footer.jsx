import React from "react";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer>
        <p class="copyright">Copyright © {year}</p>
      </footer>
    </>
  );
};

export default Footer;
