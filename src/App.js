import React from 'react';
import Accordion from './components/Accordion';

const items=[
  {
    title:'What is reat',
    content: "React is a froint end javascript frontend"
  },
  {
    title:'Why React',
    content: "React is a favorite among developers and, of course, is trendy"
  },
  {
    title:'How do you use React',
    content: "By creacting components"
  }
];

const App = () => {
  return(
    <Accordion items={items}/>
  );
};

export default App;

