import _ from 'lodash';
import {FETCH_POST,FETCH_POST_BY_ID,DELETE_POST} from '../actions/index';

export default (state={},action)=>{
    switch(action.type)
    {
        case DELETE_POST:
            return _.omit(state,action.payload)
        case FETCH_POST:
            return _.mapKeys(action.payload.data,'id');
        case FETCH_POST_BY_ID:
            return {...state,[action.payload.data.id]:action.payload.data}
        default:
            return state;

    }
}

