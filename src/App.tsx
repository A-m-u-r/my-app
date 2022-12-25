import React from "react";
import Account from "./components/Account";
import "./components/Card";
import Card from "./components/Card";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import { useState } from "react";
import Week from "./components/Week";
import Child from "./components";

function App() {
  let [isOpen, setIsOpen] = useState(false);

  const Parent = () => {
    const [value, setValue] = useState('');
    const handleChange = (arg:any)=> {
      setValue(arg);
    };
    
    return (
      <Child handleChange={handleChange} />
      
    );
  };

  return (
    <div className="App">
      <Card />
      <Account />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ backgroundColor: "grey" }}>Привет</div>
      </Modal>
      <Week />
      <button onClick={() => setIsOpen(true)}>Click!</button>
    </div>
  );
}

export default App;
