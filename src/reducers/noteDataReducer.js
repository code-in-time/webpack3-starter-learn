import {FETCH_NOTES} from '../actions/'




export default function(state = {A:1}, action) {

    switch (action.type) {

        case FETCH_NOTES:
            return Object.assign({}, action.payload);

        default:
        return state;
    }
};
