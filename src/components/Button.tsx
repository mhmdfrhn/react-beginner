import React from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  color?: "primary" | "success" | "danger";
  onClick: () => void;
}

export default function Button({
  children,
  onClick,
  color = "primary",
}: Props) {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
