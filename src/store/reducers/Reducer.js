import {
    GENERATEINDEX,
    HANDLECLICK,
    FUNC,
    START,
    END,
    LOSE,
    TIMERNUMBER,
    TIMER,
} from '../actionTypes/actionTypes'

const initialState = {
    index: Math.floor(Math.random() * 6),
    timer: null,
    timerNumber: 4000,
    isDisplay: false,
    isGreen: false,
    countSuccess: 0,
    countFail: 0,
    array: Array(6).fill(null),
    bool: false,

}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GENERATEINDEX:
            return {
                ...state,
                index: action.payload.index,
            }

        case HANDLECLICK:
            return {
                ...state,
                countSuccess: ++state.countSuccess,
                isGreen: true,
                bool: true
            }

        case FUNC:
            return {
                ...state,
                isGreen: false,
                bool: false
            }

        case START:
            return {
                ...state,
                timer: action.payload.timer,
                isDisplay: true,
                countSuccess: 0,
                countFail: 0,
            }

        case END:
            return {
                ...state,
                timer: null,
                timerNumber: 4000,
                isDisplay: false,
                isGreen: false,
                array: Array(6).fill(null),
            }

        case LOSE: {
            let countFail = state.countFail
            return {
                ...state,
                countFail: ++countFail,
                bool: false
            }
        }

        case TIMERNUMBER:
            return {
                ...state,
                timerNumber: action.payload.timerNumber,
            }

        case TIMER:
            return {
                ...state,
                timer: action.payload.timer,
            }

        default:
            return state
    }
}