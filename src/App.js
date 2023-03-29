import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  const [showCart, setShowCart] = useState();
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="App">
      <Navbar toggleCart={toggleCart}/>
      <Home showCart={showCart}/>
    </div>
  );
}

export default App;
