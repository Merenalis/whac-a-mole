import React, {useCallback, useEffect, useRef} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {
    actionEnd,
    actionFunc,
    actionGenerateIndex,
    actionHandleClick,
    actionLose,
    actionStart, actionTimer, actionTimerNumber,
} from '../store/actions/actions'
import Result from './Result'
import background from '../images/background2.png'
import mole from '../images/mole.png'

function Main() {
    const dispatch = useDispatch()
    const data = useSelector(state => state, shallowEqual)
    const styleBackGround = {backgroundImage: 'url(' + background + ')'}
    const display = data.isDisplay === false ? '' : 'display'
    const green = data.isGreen === true ? 'green' : ''
    let ref = useRef(0)

    useEffect(func, [data.index])

    function generateIndex() {
        dispatch(actionGenerateIndex(Math.floor(Math.random() * 6)))
    }

    function handleClick() {
        dispatch(actionHandleClick())
    }

    function func() {
        if (data.bool === false && ref.current !== 0) {
            lose()
        }
        ref.current++
        dispatch(actionFunc())
        memoizedIfWin()
        memoizedIfLose()
        memoizedIfSuccess10()
    }

    const memoizedIfWin = useCallback(() => {
        if (data.countSuccess === 999) {
            endGame()
        }
    }, [data.countSuccess])
    const memoizedIfLose = useCallback(() => {
        if (data.countFail === 4) {
            endGame()
        }
    }, [data.countFail])
    const memoizedIfSuccess10 = useCallback(() => {
        if (data.countSuccess % 10 === 0 && data.countSuccess !== 0) {
            if (data.timerNumber > 1000) {
                dispatch(actionTimerNumber(data.timerNumber - 500))
            }
            clearInterval(data.timer)
            const timerI = setInterval(generateIndex, data.timerNumber)
            dispatch(actionTimer(timerI))
        }
    }, [data.countSuccess])

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
            <div className="statistics">
                Successful: {data.countSuccess} <br/>
                Failed: {data.countFail} <br/>
                Timer: {data.timerNumber} <br/>
            </div>
            <div className="game" style={styleBackGround}>
                {
                    data.array.map((_, n) => {
                        if (n === data.index) {
                            return (<div key={n} className={`back ${green}`}>
                                    <img className={`mole ${display}`} src={mole} width='150px' alt="mole"
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
            {
                data.countFail === 5 || data.countSuccess === 999 ? <Result onClick={restart}/> : <div/>
            }


        </div>
    )

}

export default Main
