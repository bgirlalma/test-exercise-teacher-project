import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from './components/global.styled';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-exercise-teacher-project">
      <GlobalStyled/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

