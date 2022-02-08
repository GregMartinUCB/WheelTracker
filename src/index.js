import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Position from './Position';
import reportWebVitals from './reportWebVitals';

let testDate = new Date()

let positionData = {
  ticker:"TQQQ",
  price:19.12,
  openDate: testDate,
  status:"open",
  premium:1.00,
  delta:-.300,
  theta:1.00,
  targetProfit:1.00,
};

ReactDOM.render(
  <React.StrictMode>
    <div className='positions'>
      <Position positionData = {positionData} />
      <Position positionData = {positionData} />
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
