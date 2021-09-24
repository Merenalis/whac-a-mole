import React from 'react'
import Main from './components/Main'
import {Provider} from 'react-redux'
import store from './store/store'
import ModalStart from './components/ModalStart'

function App() {
    return (
        <Provider store={store}>
            <Main/>
            <ModalStart/>
        </Provider>
    )
}

export default App
