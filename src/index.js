import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
//redux
import { Provider } from 'react-redux';
import store2 from './Components/Redux-Old/Store/Store2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store2}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
