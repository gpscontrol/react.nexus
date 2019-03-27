import React from 'react'
import ReactDOM from 'react-dom'
import rootReducer from './reducers';
import MainPage from './Main';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
