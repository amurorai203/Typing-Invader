import React from "react";
// import "./style.css";

function Wrapper(props) {
  return <tbody className="wrapper">{props.children}</>;
}

export default Wrapper;
