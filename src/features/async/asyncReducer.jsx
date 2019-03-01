import { createReducer } from '../../app/common/util/reducerUtil'
import { ASYNC_ACTION_START, ASYNC_ACTION_FISNISH, ASYNC_ACTION_ERROR } from './asyncConstants';

const initialState = {
    loading: false
}

export const asyncActionStarted = (state, payload) => {
    return {
        ...state,
        loading: true
    }
}

export const asyncActionFinished = (state, payload) => {
    return {
        ...state,
        loading: false// back to false when done 
    }
}

export const asyncActionError = (state, payload) => {
    return {
        ...state,
        loading: false// back to false, if error
    }
}

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_FISNISH]: asyncActionFinished,
    [ASYNC_ACTION_ERROR]: asyncActionError,

})
