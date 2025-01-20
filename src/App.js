import "./App.css";
import { useState } from "react";

export default function App() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim
    est molestiae nemo neque officiis ut, voluptatum! Accusantium animi,
        commodi fuga, molestiae numquam odio odit praesentium quaerat sit vero
    vitae.`;
  return (
    <div className="App">
      <TextExpander>{text}</TextExpander>
      <TextExpander
        collapsedNumWord={8}
        buttonFontColor="#ff6622"
        buttonExpandedText="Hide Text"
        buttonCollapsedText="Show Text"
      >
        The Second One is: {text}
      </TextExpander>
      <TextExpander
        expanded={true}
        text={text}
        containerClassName="with-background"
      >
        The Third Text is: {text}
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWord = 12,
  expanded = false,
  buttonFontColor = "blue",
  buttonExpandedText = "Show Less",
  buttonCollapsedText = "Show More",
  containerClassName,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const splitText =
    typeof children === "object"
      ? children.join(" ").split(" ").slice(0, collapsedNumWord).join(" ")
      : children.split(" ").slice(0, collapsedNumWord).join(" ");

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: buttonFontColor,
    fontSize: "1.2rem",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex" }} className={containerClassName}>
      <p>{isExpanded ? children : `${splitText}...`}</p>
      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? buttonExpandedText : buttonCollapsedText}
      </button>
    </div>
  );
}
