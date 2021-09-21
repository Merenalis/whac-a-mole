import {
    END,
    FUNC,
    GENERATEINDEX,
    HANDLECLICK,
    LOSE,
    START,
    TIMER,
    TIMERNUMBER, TRANSFORM
} from '../actionTypes/actionTypes';

export function actionGenerateIndex(index) {
    return {
        type: GENERATEINDEX,
        index:index
    }
}
export function actionHandleClick(countSuccess) {
    return {
        type: HANDLECLICK,
        countSuccess:countSuccess,

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
        timer:timer,

    }
}
export function actionEnd() {
    return {
        type: END,

    }
}
export function actionLose(countFail) {
    return {
        type: LOSE,
        countFail:countFail
    }
}
export function actionTimerNumber(timerNumber) {
    return {
        type: TIMERNUMBER,
        timerNumber:timerNumber
    }
}
export function actionTimer(timer) {
    return {
        type: TIMER,
        timer:timer
    }
}




