import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items=[
  {
    title:'What is react',
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
    <div>
      <Search />
    </div>
  );
};

export default App;

