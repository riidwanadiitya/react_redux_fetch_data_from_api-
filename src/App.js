import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
// import CakeContainer from './components/CakeContainer';
// import HooksIceCreamContainer from './components/HookIceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeContainer />
        <HooksIceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
