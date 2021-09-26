import React, {useCallback, useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {
    actionEnd,
    actionFunc,
    actionGenerateIndex, actionGreen,
    actionHandleClick,
    actionLose, actionRed,
    actionStart, actionTimerNumber,
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
    const red = data.isRed === true ? 'red' : ''
    const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms))

    useEffect(func, [data.isStart, data.countFail, data.countSuccess])

    function func() {
        if (data.isStart) {
            const timeout = setTimeout(() => {
                dispatch(actionRed())
                lose()

            }, data.timerNumber)
            generateIndex()
            dispatch(actionFunc())

            memoizedIfSuccess10()
            memoizedIfLose()
            memoizedIfWin()
            return () => clearTimeout(timeout)

        }
    }

    const memoizedIfWin = useCallback(() => {
        if (data.countSuccess === 20) {
            dispatch(actionEnd())
        }
    }, [data.countSuccess])
    const memoizedIfLose = useCallback(() => {
        if (data.countFail === 3) {
            dispatch(actionEnd())
        }
    }, [data.countFail])
    const memoizedIfSuccess10 = useCallback(() => {
        if (data.countSuccess % 10 === 0 && data.countSuccess !== 0) {
            if (data.timerNumber > 1000) {
                dispatch(actionTimerNumber(data.timerNumber - 500))
            }
        }
    }, [data.countSuccess])

    function restart() {
        dispatch(actionEnd())
        dispatch(actionStart())
    }

    async function lose() {
        await delay(200)
        dispatch(actionLose())
    }

    async function handleClick() {
        dispatch(actionGreen('green'))
        await delay(300)
        dispatch(actionHandleClick())
    }

    function generateIndex() {
        dispatch(actionGenerateIndex(Math.floor(Math.random() * 6)))
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
                            return (
                                <div key={n} className={`back ${green} ${red}`}>
                                    <img className={`mole ${display}`} src={mole} width='150px' alt="mole"
                                         key={data.index}
                                         onClick={() => handleClick(n)}/>
                                </div>
                            )
                        } else {
                            return (
                                <div className='back-wrap' onClick={() => lose(n)}>
                                    <div key={n} className="back"/>
                                </div>
                            )
                        }
                    })
                }

            </div>
            {
                data.countFail === 3 || data.countSuccess === 20 ? <Result onClick={restart}/> : <div/>
            }
        </div>
    )

}

export default Main
