import courses from './courseReducer';
import authors from './authorReducer';
import { combineReducers } from 'redux';
import IAppState from "../store/IAppState";

const rootReducer = combineReducers<IAppState>({
    courses,
    authors
});

export default rootReducer;
