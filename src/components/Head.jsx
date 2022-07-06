
import React from "react";

const Head = ({title,children}) => {
  document.title =   title;
  return <div className="w-100">{children}</div>;
};

export default Head;
