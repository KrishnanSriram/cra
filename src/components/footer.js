import React from "react";
/*
const footer  = {
  "position": "relative",
  "margin-top": "-150px",
  "height": "150px",
  "clear":"both",
  "padding-top":"20px",
} 
*/
const footer  = {
} 

const Footer = () => {
  return (
    <div style={footer}>
      <footer className="py-5 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">
            Copyright &copy; Your Website 2019
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
