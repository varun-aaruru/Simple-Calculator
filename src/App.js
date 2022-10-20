import Buttons from "./components/Buttons";
import './App.css';
import { useState } from "react";
import * as math from "mathjs";
import Input from "./components/Input";
const App = () => {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val]);
  }
  const clearInput = () => {
    setText("");
    setResult("");
  }
  const calcResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  }

  return (
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result} />
        <div className="row">
          <Buttons symbol="7" handleClick={addToText} />
          <Buttons symbol="8" handleClick={addToText} />
          <Buttons symbol="9" handleClick={addToText} />
          <Buttons symbol="/" color="#f2a33c" handleClick={addToText} />
        </div>
        <div className="row">
          <Buttons symbol="4" handleClick={addToText} />
          <Buttons symbol="5" handleClick={addToText} />
          <Buttons symbol="6" handleClick={addToText} />
          <Buttons symbol="*" color="#f2a33c" handleClick={addToText} />
        </div>
        <div className="row">
          <Buttons symbol="1" handleClick={addToText} />
          <Buttons symbol="2" handleClick={addToText} />
          <Buttons symbol="3" handleClick={addToText} />
          <Buttons symbol="+" color="#f2a33c" handleClick={addToText} />
        </div>
        <div className="row">
          <Buttons symbol="0" handleClick={addToText} />
          <Buttons symbol="." handleClick={addToText} />
          <Buttons symbol="=" handleClick={calcResult} />
          <Buttons symbol="-" color="#f2a33c" handleClick={addToText} />
        </div>
        <Buttons symbol="CLEAR" color="red" handleClick={clearInput} />
      </div>
    </div>
  );
}

export default App;
