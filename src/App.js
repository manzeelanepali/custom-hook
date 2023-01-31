// import { useState } from "react";
import useCounter from "./useCouter";

const App = (props) => {
  const counter = useCounter();
  const counterButtom = useCounter();

  return (
    <>
      <div>
        <h1>top counter</h1>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </div>
      <div>
        <h1>Buttom counter</h1>
        <div>{counterButtom.value}</div>
        <button onClick={counterButtom.increase}>plus</button>
        <button onClick={counterButtom.decrease}>minus</button>
        <button onClick={counterButtom.zero}>zero</button>
      </div>
    </>
  );
};
export default App;
