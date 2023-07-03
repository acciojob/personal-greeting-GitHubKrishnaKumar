
import React, { useState } from "react";
import './../styles/App.css';
import { UsageState } from "react";
import Greeting from "./Greeting";
const App = () => {
const [name,setName] = useState('');

  return (
    <div>
        {/* Do not remove the main div */}
      <Greeting/>
    </div>
  )
}

export default App
