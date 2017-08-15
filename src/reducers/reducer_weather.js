import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action) {
    console.log(action);
    if (action.type === FETCH_WEATHER) {
        //return state.concat([action.payload.data]);
        // DONT DO STATE.PUSH!! YOU NEED TO RETURN A NEW INSTANCE OF STATE,
        // you never want to manipulate your state.
        //Or same thing with ES6:
        return [ action.payload.data, ...state ];
    }
    return state;
}
