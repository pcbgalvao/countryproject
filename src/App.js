import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import SideBar from './components/SideBar';

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
    label: "Africa",
  },
  {
    label: "Americas",
  },
  {
    label: "Asia",
  },
  {
    label: "Europe",
  },
  {
    label: "Oceania",
  },
];

const App = () => {
  const [region, setRegion] = useState("");

  return (
    <div>
      <div className="pusher">
        <Dropdown
          label="Select a Region"
          options={options}
          selected={region}
          onSelectedChange={setRegion}
        />
      </div>
      <div className="ui right sidebar">
        <SideBar region={region.label} />                          
      </div>
    </div>
  );
};


export default App;