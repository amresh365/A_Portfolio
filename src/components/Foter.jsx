import React from "react";

const Foter = () => {
  const date = new Date().getFullYear();
  return (
    <div className="container-fluid bg-black my-3 footer1">
      <footer className="footer text-light">
        <ul className="ul ">
          <li>ContectUs-amreshgupta365@gmail.com</li>
        </ul>
        <ul className="ul">
          <li>CopyRight &copy; {date} | Amresh Gupta</li>
        </ul>
      </footer>
    </div>
  );
};

export default Foter;
