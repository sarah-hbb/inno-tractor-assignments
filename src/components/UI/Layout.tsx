import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-black min-vh-100 min-w-100 text-white p-5 d-flex flex-column justify-content-center align-items-center ">
      <Link to={"/"}>
        <i className="bi bi-house position-fixed p-5 fs-1 top-0 start-0 right-end text-lime"></i>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
