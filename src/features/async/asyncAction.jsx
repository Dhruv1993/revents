import { ASYNC_ACTION_START, ASYNC_ACTION_FISNISH, ASYNC_ACTION_ERROR } from './asyncConstants'

// create the methods for each action

export const asyncActionStart = () => {

    return {
        type: ASYNC_ACTION_START
    }
}

export const asyncActionFinish = () => {

    return {
        type: ASYNC_ACTION_FISNISH
    }
}

export const asyncActionError= () => {

    return {
        type: ASYNC_ACTION_ERROR
    }
}