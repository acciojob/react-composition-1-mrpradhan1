
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const tabs=[
  {
    title:'Tab 1',
    content: 'this is content for tab 1.'
  },
  {
    title:'Tab 1',
    content: 'this is content for tab 2'
  },
  {
    title:'Tab 1',
    content: 'this is content for tab 3'
  }
]
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabProp={tabs}/>
    </div>
  )
}

export default App
