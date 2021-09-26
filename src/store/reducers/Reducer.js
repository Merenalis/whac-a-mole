import {
    GENERATEINDEX,
    HANDLECLICK,
    FUNC,
    START,
    END,
    LOSE,
    TIMERNUMBER, RED, GREEN,
} from '../actionTypes/actionTypes'

const initialState = {
    index: null,
    timerNumber: 4000,
    isDisplay: false,
    isGreen: false,
    isRed: false,
    countSuccess: 0,
    countFail: 0,
    array: Array(6).fill(null),
    isStart: false,

}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GENERATEINDEX:
            return {
                ...state,
                index: action.payload.index,
            }

        case HANDLECLICK: {
            let countSuccess = state.countSuccess
            return {
                ...state,
                countSuccess: ++countSuccess,
            }
        }
        case FUNC:
            return {
                ...state,
                isGreen: false,
                isRed: false,

            }
        case GREEN:
            return {
                ...state,
                isGreen: true,
            }
        case RED:
            return {
                ...state,
                isRed: true,
            }

        case START:
            return {
                ...state,
                isDisplay: true,
                countSuccess: 0,
                countFail: 0,
                isStart: true,
            }

        case END:
            return {
                ...state,
                timerNumber: 4000,
                isDisplay: false,
                array: Array(6).fill(null),
                isStart: false,
            }

        case LOSE: {
            let countFail = state.countFail
            return {
                ...state,
                countFail: ++countFail,
            }
        }

        case TIMERNUMBER:
            return {
                ...state,
                timerNumber: action.payload.timerNumber,
            }

        default:
            return state
    }
}