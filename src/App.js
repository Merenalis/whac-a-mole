import React from 'react'
import Main from "./components/Main"
import Result from "./components/Result";
import {Provider} from "react-redux";
import store from "./store/store";
import ModalStart from "./components/ModalStart";
import background2 from './images/background2.png'

function App() {


    return (
        <Provider store={store} >

            <Main/>
            <ModalStart/>
        </Provider>
  );

}

export default App;
