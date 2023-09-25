import Navbar from "@/components/body/Navbar";
import React from "react";

export const metadata = {
  title: "Food Trade",
  description: "",
};

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
