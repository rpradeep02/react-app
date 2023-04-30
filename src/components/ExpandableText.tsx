import React, { Children, useState } from "react";

interface Props {
  children: string;
  onMaxChar?: number;
}
const ExpandableText = ({ children, onMaxChar = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= onMaxChar) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, onMaxChar);
  return (
    <p>
      {text}...{" "}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
