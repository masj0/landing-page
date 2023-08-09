import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
