import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgressCount from './ajaxStatusReducer';
import { combineReducers } from 'redux';
import IAppState from "../store/IAppState";

const rootReducer = combineReducers<IAppState>({
    courses,
    authors,
    ajaxCallInProgressCount
});

export default rootReducer;
