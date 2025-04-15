import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './app/store';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


   <Provider store={store}>
       <App />
       <ToastContainer 
            position='top-right'
            pauseOnHover={false}
            autoClose={1000}
       />
   </Provider>
        
         

);


