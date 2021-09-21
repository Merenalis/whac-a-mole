import React, {useState} from 'react';
import '../styles/result.css';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {actionGenerateIndex, actionStart} from "../store/actions/actions";
export default function  ModalStart() {
    const [display,setDisplay] = useState('block')
    const data = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    function hideWindow() {
        setDisplay('none')
        const timer = setInterval(generateIndex, data.timerNumber)
        dispatch(actionStart(timer))
    }
    function generateIndex() {
        dispatch(actionGenerateIndex(Math.floor(Math.random() * 6)))
    }
        const style = {display: display}
        return (
            <div id="modal-start" style={style}>
                <div id="overlay-start">
                    <div id="modal-window-start">
                        <div id="content-start">
                            Press Start to start a new game.
                        </div>
                        <div className="btn" onClick={() => hideWindow()}>
                            Start
                        </div>
                    </div>
                </div>
            </div>
        );

}