import React from "react";
import "./styles.css";

interface ICustomHeaderProps {
  title: string;
}

export const CustomHeader: React.FC<ICustomHeaderProps> = ({ title }) => {
  return <div className="header">{title}</div>;
};

export default CustomHeader;
