import {
    END,
    FUNC,
    GENERATEINDEX,
    HANDLECLICK,
    LOSE,
    START,
    TIMER,
    TIMERNUMBER
} from '../actionTypes/actionTypes'

export function actionGenerateIndex(index) {
    return {
        type: GENERATEINDEX,
        payload:{
            index:index
        }
    }
}
export function actionHandleClick() {
    return {
        type: HANDLECLICK,
    }
}
export function actionFunc() {
    return {
        type: FUNC,

    }
}
export function actionStart(timer) {
    return {
        type: START,
        payload:{
            timer:timer,
        }

    }
}
export function actionEnd() {
    return {
        type: END,

    }
}
export function actionLose(fail) {
    return {
        type: LOSE,
        countFail: fail,
    }
}
export function actionTimerNumber(timerNumber) {
    return {
        type: TIMERNUMBER,
        payload:{
            timerNumber:timerNumber
        }
    }
}
export function actionTimer(timer) {
    return {
        type: TIMER,
        payload:{
            timer:timer,
        }
    }
}





