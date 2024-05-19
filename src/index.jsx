import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'draft-js/dist/Draft.css';
import 'babel-polyfill';
import { AuthProvider } from './providers/isAuth';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();