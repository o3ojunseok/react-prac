import React from 'react';
import ReactDOM from 'react-dom/client'; // 브라우저에 있는 실제 DOM 내부에 이랙트 컴포넌트를 렌더링 하겠다는 의미
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<Counter></Counter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
