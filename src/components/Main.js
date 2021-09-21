import React, {useEffect, useRef, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {
    actionEnd,
    actionFunc,
    actionGenerateIndex,
    actionHandleClick,
    actionLose,
    actionStart, actionTimer, actionTimerNumber,
} from "../store/actions/actions";
import Result from "./Result";
import background from '../images/background2.png'
import mole from '../images/mole.png'

function Main() {
    const dispatch = useDispatch()
    const data = useSelector(state => state, shallowEqual)
    const style = {display: data.isDisplay, paddingBottom: '65px'}
    const styleGreen = {background: data.isGreen}
    const styleBackGround = {
        backgroundImage: 'url(' + background + ')',
        backgroundSize: 'cover',
        height: '500px'
    }
    let ref = useRef(0)

    function generateIndex() {
        dispatch(actionGenerateIndex(Math.floor(Math.random() * 6)))
    }

    useEffect(func, [data.index])

    function handleClick() {
        dispatch(actionHandleClick(data.countSuccess))
    }

    function func() {
        if (data.bool === false && ref.current !== 0) {
            lose()
        }
        ref.current++
        dispatch(actionFunc())
        ifWin()
        ifLose()
        ifSuccess10()
    }

    function ifWin() {
        if (data.countSuccess === 10) {
            clearInterval(data.timer)
        }
    }

    function ifLose() {
        if (data.countFail === 2) {
            clearInterval(data.timer)
        }
    }

    function ifSuccess10() {
        if (data.countSuccess % 10 === 0 && data.countSuccess !== 0) {
            if (data.timerNumber > 1000) {
                dispatch(actionTimerNumber(data.timerNumber - 500))
            }

            clearInterval(data.timer)
            const timerI = setInterval(generateIndex, data.timerNumber)

            dispatch(actionTimer(timerI))
        }
    }

    function startGame() {
        const timer = setInterval(generateIndex, data.timerNumber)
        dispatch(actionStart(timer))
    }

    function endGame() {
        clearInterval(data.timer)
        dispatch(actionEnd())
    }

    function restart() {
        endGame()
        startGame()
    }

    function lose() {
        dispatch(actionLose(data.countFail))
    }


    return (
        <div className="wrapper">
            <div className="game" style={styleBackGround}>
                {
                    data.array.map((_, n) => {
                        if (n === data.index) {
                            return (<div key={n} className="back" style={styleGreen}>
                                    <img className='mole' src={mole} width='150px' alt="mole" style={style}
                                         key={data.index}
                                         onClick={() => handleClick(n)}/>
                                    </div>
                            )
                        } else {
                            return (
                                <div key={n} className="back" onClick={() => lose(n)}/>
                            )
                        }
                    })
                }
            </div>
            <Result onClick={restart}/>

        </div>
    );

}

export default Main;
