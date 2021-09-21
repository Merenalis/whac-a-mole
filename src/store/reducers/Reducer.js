import {GENERATEINDEX, HANDLECLICK, FUNC, START, END, LOSE, TIMERNUMBER, TRANSFORM} from '../actionTypes/actionTypes';

const initialState = {
    index: Math.floor(Math.random() * 6),
    timer: null,
    timerNumber: 4000,
    isDisplay: 'none',
    isGreen: '#565800',
    countSuccess: 0,
    countFail: 0,
    array: Array(6).fill(null),
    bool: false,

};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GENERATEINDEX: {
            return {
                ...state,
                index: action.index,
            }
        }
        case HANDLECLICK: {
            return {
                ...state,
                countSuccess: ++action.countSuccess,
                isGreen: 'green',
                bool: true
            }
        }
        case FUNC: {
            return {
                ...state,
                isGreen: '#565800',
                bool: false
            }
        }
        case START: {
            return {
                ...state,
                timer: action.timer,
                isDisplay: 'block',
            }
        }
        case END: {
            return {
                ...state,
                timer: null,
                timerNumber: 4000,
                isDisplay: 'none',
                isGreen: '#565800',
                countSuccess: 0,
                countFail: 0,
                array: Array(6).fill(null)
            }
        }
        case LOSE: {
            return {
                ...state,
                countFail: ++action.countFail,
                bool: false
            }
        }
        case TIMERNUMBER: {
            return {
                ...state,
                timerNumber: action.timerNumber,
            }
        }


        default:
            return state;
    }
}