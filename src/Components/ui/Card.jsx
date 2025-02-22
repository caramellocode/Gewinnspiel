import React from "react";

const Card = ({ children, className }) => {
  return <div className={`shadow-lg rounded-lg p-4 ${className}`}>{children}</div>;
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

export { Card, CardContent };

