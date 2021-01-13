import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is react",
    content: "React is a froint end javascript frontend",
  },
  {
    title: "Why React",
    content: "React is a favorite among developers and, of course, is trendy",
  },
  {
    title: "How do you use React",
    content: "By creacting components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "shade blue",
  },
];

const App = () => {

  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
