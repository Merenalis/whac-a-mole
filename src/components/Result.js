import {shallowEqual, useSelector} from 'react-redux'
import '../styles/result.css'

function Result(props) {
    const data = useSelector(state => state, shallowEqual)
    const level = data.countSuccess / 10
    return (
        <div id='modal-start'>
            <div id='overlay-start'>
                <div id='modal-window-start'>
                    <div id='content-start'>
                        {data.countSuccess === props.countForWin ? <div className='results'>
                                Successful: {data.countSuccess} <br/>
                                Fail: {data.countFail} <br/>
                                Time: {data.timerNumber} <br/>
                                Level: {level}
                            </div> :
                            <div>
                                You lose
                            </div>
                        }
                    </div>
                    <div className='btn' onClick={props.onClick}>
                        Start new game!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result