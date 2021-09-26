import React, {useState} from 'react'
import '../styles/result.css'
import {useDispatch} from 'react-redux'
import {actionStart} from '../store/actions/actions'

export default function ModalStart() {
    const [display, setDisplay] = useState('block')
    const dispatch = useDispatch()

    function hideWindow() {
        setDisplay('none')
        dispatch(actionStart())
    }

    const style = {display: display}
    return (
        <div id='modal-start' style={style}>
            <div id='overlay-start'>
                <div id='modal-window-start'>
                    <div id='content-start'>
                        Press Start to start a new game.
                    </div>
                    <div className='btn' onClick={() => hideWindow()}>
                        Start
                    </div>
                </div>
            </div>
        </div>
    )

}