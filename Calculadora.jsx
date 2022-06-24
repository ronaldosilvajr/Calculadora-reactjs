import React, { useState } from 'react';
import'./Calculadora.css';

export default function Calculadora() {
     const [num,setNum] = useState(0);
     const [num2,setNum2] = useState(0);
     const [operador,setOperador] = useState()

     function inputNum(e) {
         var input=e.target.value
         if(num===0){
         setNum(input);
         }else{
          setNum(num + input);
         }

     }

     function clear(e) {
      setNum(0)
     }

     function porcentage(){
      setNum(num/100);
     }

     function changenSing(){
      if(num>0){
        setNum(-num)
      }else{
        setNum(Math.abs(num));
      }
     }

     function calculate(){
         if(operador==="/"){
           setNum(parseFloat(num2) / parseFloat (num));
         }else if(operador==="x"){
          setNum(parseFloat(num2) * parseFloat (num));
        }else if(operador==="+"){
          setNum(parseFloat(num2) + parseFloat (num));
        }else if(operador==="-"){
          setNum(parseFloat(num2) - parseFloat (num));
        }
        console.log("calculou!")
        console.log(num2)
        console.log(num)
        console.log(operador);
     }

     function operatorHandler(e){
      var operadorInput=e.target.value
      setOperador(operadorInput)
      setNum2(num)
      setNum(0);
     }
  return (
    <body>
  <div className='Fundo'>
    <div className='Calculadora'>
      <h1 className='Resultado'>{num}</h1>
        <tabel>
          <tr>
        <tb><button onClick={clear}>AC</button></tb>
        <tb><button onClick={changenSing}>+/-</button></tb>
        <tb><button onClick={porcentage}>%</button></tb>
        <tb><button className="Laranja" onClick={operatorHandler} value="/">/</button></tb>
          </tr>
          <tr>
        <tb><button className="Cinza" onClick={inputNum} value={7}>7</button></tb>
        <tb><button className="Cinza" onClick={inputNum} value={8}>8</button></tb>
        <tb><button className="Cinza" onClick={inputNum} value={9}>9</button></tb>
        <tb><button className="Laranja" onClick={operatorHandler} value="x">x</button></tb>
          </tr>
          <tr>
        <tb><button className="Cinza" onClick={inputNum} value={4}>4</button></tb>
        <tb><button className="Cinza" onClick={inputNum} value={5}>5</button></tb>
        <tb><button className="Cinza" onClick={inputNum} value={6}>6</button></tb>
        <tb><button className="Laranja"onClick={operatorHandler} value="-">-</button></tb>
          </tr>
          <tr>
        <tb><button className="Cinza" onClick={inputNum} value={1}>1</button></tb>
        <tb><button className="Cinza" onClick={inputNum} value={2}>2</button></tb>
        <tb><button className="Cinza" onClick={inputNum} value={3}>3</button></tb>
        <tb><button className="Laranja" onClick={operatorHandler} value="+">+</button></tb>
          </tr>
          <tr>
        <tb><button className="Cinza" onClick={inputNum} value={0} style={{width: '4.5em'}}>0</button></tb>
        <tb><button className="Cinza" onClick={inputNum} value={"."}>,</button></tb>
        <tb><button className="Laranja" onClick={calculate}>=</button></tb>
          </tr>
    </tabel>
    </div>
    </div>
    </body>
  );
}
