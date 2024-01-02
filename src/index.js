import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bookReduser } from './store/redusers/book';
import {createStore} from "redux";
import { Provider } from 'react-redux';

//יצירת סטייט כללי כלומר אני אומרת לו ש bookReduser יהיה הסטייט 
const myStore=createStore(bookReduser)//בפעם הראשונה ילך להפעיל את bookReduser

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    {/* app וכל ילדיו יוכלו לגשת לסטייט הכללי מיסטור */}
     <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
