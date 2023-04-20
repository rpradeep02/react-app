import React, { ReactNode } from "react";
import Alert from "./Alert";

interface Props {
  children: ReactNode;
  color?: "primary" | "success";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "success" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
