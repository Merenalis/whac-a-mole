import {
    END,
    FUNC,
    GENERATEINDEX, GREEN,
    HANDLECLICK,
    LOSE, RED,
    START,
    TIMERNUMBER
} from '../actionTypes/actionTypes'

export function actionGenerateIndex(index) {
    return {
        type: GENERATEINDEX,
        payload: {
            index: index
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

export function actionStart() {
    return {
        type: START,
    }
}

export function actionEnd() {
    return {
        type: END,
    }
}

export function actionLose() {
    return {
        type: LOSE,
    }
}

export function actionTimerNumber(timerNumber) {
    return {
        type: TIMERNUMBER,
        payload: {
            timerNumber: timerNumber
        }
    }
}

export function actionGreen() {
    return {
        type: GREEN,
    }
}
export function actionRed() {
    return {
        type: RED,
    }
}





