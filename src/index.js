import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NoticeBoard from "./notice-practice/NoticeBoard";
import Clock from "./standard-practice/Clock";
import Toggle from "./standard-practice/Toggle";
import LoggingButton from "./standard-practice/LoggingButton";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<NoticeBoard/>*/}
      {/*<Clock />*/}
      {/*<Toggle/>*/}
      <LoggingButton/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
