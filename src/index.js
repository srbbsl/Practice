import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
<<<<<<< HEAD
=======
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ToastContainer } from 'react-toastify';
>>>>>>> redux




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<<<<<<< HEAD
    <div>

        <App />

    </div>
    
        

        
    
=======

   <Provider store={store}>
        <App />
        <ToastContainer 
            position='top-center'
            pauseOnHover={false}
            autoClose={500}
        />
   </Provider>
    
   
       


>>>>>>> redux
    

);


