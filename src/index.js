import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Bounce, ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './app/store';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


   <Provider store={store}>
       <App />
       <ToastContainer 
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
       />
   </Provider>
        
         

);


