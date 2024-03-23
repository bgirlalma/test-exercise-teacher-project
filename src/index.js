import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyled } from './global.styled';
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-exercise-teacher-project">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyled/>
          <App/>
       
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

