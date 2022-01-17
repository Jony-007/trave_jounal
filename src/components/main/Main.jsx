import React from "react";
import "./main.css";
import Card from "../card/Card";
import Data from "../../Data";

const Main = () => {
  const data = Data.map((item) => {
    return <Card item={item} key={item.id} />;
  });
  return <div className="main">{data}</div>;
};

export default Main;
