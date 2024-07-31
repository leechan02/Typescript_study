import React, { useState } from "react";
import "./App.css";
import Store from './Store';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='App'>
      <Store />
    </div>
  );
}

export default App;
