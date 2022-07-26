import { createAction, handleActions } from 'redux-action';
import { Map, List } from 'immutable';

export const IS_LOADING = 'index/IS_LOADING';
export const WEATHERING_VIEW = 'index/WEATHERING_VIEW';

export const is_loading = createAction(IS_LOADING);
export const weathering_view = createAction(WEATHERING_VIEW);

const initialState = Map ({
    loading : true,
    weather : ''
})

export default handleActions({
    [IS_LOADING] : (state, action) => {
        return Map ({
            loading : true
        })
    },
    [WEATHERING_VIEW] : (state,action) => {
        return Map({
            loading : false,
            weather : action.payload
        })
    }
}, initialState);