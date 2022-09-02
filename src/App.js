import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from "./components/Input";
import * as math from 'mathjs'

const buttonColor = "#f2a33c";

function App() {

    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    
    const addToText = (val) => {
        setText(text=>[...text, val + ''])
    }

    const resetInput = () => {
        setText('');
        setResult('');
    }
    
    const calculateResult = () => {
        const input = text.join('');
        setResult(math.evaluate(input))
    }

  return (
      <div className="App">
          <div className="calc-wrapper">
              <Input text={text} result={result} />
              <div className="row">
                  <Button symbol="7" handleClick={addToText} />
                  <Button symbol="8" handleClick={addToText} />
                  <Button symbol="9" handleClick={addToText} />
                  <Button handleClick={addToText}
                      symbol="/"
                      color={
                          buttonColor
                      }
                  />
              </div>

              <div className="row">
                  <Button symbol="4" handleClick={addToText} />
                  <Button symbol="5" handleClick={addToText} />
                  <Button symbol="6" handleClick={addToText} />
                  <Button handleClick={addToText}
                      symbol="*"
                      color={
                          buttonColor
                      }
                  />
              </div>

              <div className="row">
                  <Button symbol="1" handleClick={addToText} />
                  <Button symbol="2" handleClick={addToText} />
                  <Button symbol="3" handleClick={addToText} />
                  <Button handleClick={addToText}
                      symbol="+"
                      color={
                          buttonColor
                      }
                  />
              </div>

              <div className="row">
                  <Button symbol="0" handleClick={addToText} />
                  <Button symbol="."  handleClick={addToText}/>
                  <Button symbol="=" handleClick={calculateResult}/>
                  <Button handleClick={addToText}
                      symbol="-"
                      color={
                          buttonColor
                      }
                  />
              </div>

              <Button handleClick={resetInput} symbol="Clear" color='red'></Button>
          </div>
      </div>
  );
}

export default App;
