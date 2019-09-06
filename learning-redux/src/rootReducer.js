import { combineReducers } from "redux";
import Count from './features/count-reducer';
import CreateList from './features/list-reducer';

const rootReducer = combineReducers({
    Count,
    CreateList
})

export default rootReducer;