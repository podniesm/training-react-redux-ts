import { IAction, IEvent } from '../actions/IAction';
import Course from '../components/course/Course';
import {courseActionTypes} from "../actions/courseActions";
import initialState from "./initialState";

export default function courseReducer(state: Course[] = initialState.courses , action: IEvent): Course[] {
    switch(action.type) {
        case courseActionTypes.LOAD_COURSES_SUCCESS:
            return (action as IAction<Course[]>).payload;
        default:
            return state;
    }
}