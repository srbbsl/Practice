import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ToastContainer } from 'react-toastify';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


   <Provider store={store}>
      <App />
      <ToastContainer 
            autoClose={2000}
            position='top-right'
            pauseOnFocusLoss={false}
            pauseOnHover={false}
      />
   </Provider>     

);


