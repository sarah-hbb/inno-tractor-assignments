import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-black min-vh-100 min-w-100 text-white p-5 d-flex justify-content-center align-items-center ">
      {children}
    </div>
  );
};

export default Layout;
