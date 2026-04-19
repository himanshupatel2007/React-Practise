import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  const [number, setNumber] = useState(0);
  let a = number;
  const decrease = () => {
    a--;
    setNumber(a);
  };
  const reset = () => {
    setNumber(0);
  };
  const increase = () => {
    a++;
    setNumber(a);
  };
  return (
    <>
      <h1 className="text-7xl text-center font-bold m-10">{number}</h1>
      <div className="flex gap-5 items-center">
        <button className="bg-blue-950 py-2 px-4 text-amber-50" onClick={decrease}>DECREASE</button>
        <button className="bg-emerald-700 py-2 px-4 text-amber-50" onClick={reset}>RESET</button>
        <button className="bg-orange-900 py-2 px-4 text-amber-50" onClick={increase}>INCREASE</button>
      </div>
    </>
  );
}

export default App;
