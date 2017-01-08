import courses from './courseReducer';
import { combineReducers } from 'redux';
import IAppState from "../store/IAppState";

const rootReducer = combineReducers<IAppState>({
    courses
});

export default rootReducer;
