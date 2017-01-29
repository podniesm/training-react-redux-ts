import { IAction, IEvent } from '../actions/IAction';
import Course from '../components/course/Course';
import {courseActionTypes} from "../actions/courseActions";
import initialState from "./initialState";
import * as _ from "lodash";

export default function courseReducer(state: Course[] = initialState.courses , action: IEvent): Course[] {
    switch(action.type) {
        case courseActionTypes.LOAD_COURSES_SUCCESS:
            return (action as IAction<Course[]>).payload;

        case courseActionTypes.CREATE_COURSE_SUCCESS:
            const newCourse = (action as IAction<Course>).payload;
            return [
                ...state,
                _.assign({}, newCourse)
            ];

        case courseActionTypes.UPDATE_COURSE_SUCCESS:
            const updatedCourse = (action as IAction<Course>).payload;
            return [
                ...state.filter(c => c.id !== updatedCourse.id),
                _.assign({}, updatedCourse)
            ];

        default:
            return state;
    }
}