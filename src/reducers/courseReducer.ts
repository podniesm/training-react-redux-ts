import * as _ from 'lodash';
import { IAction, IEvent } from '../actions/IAction';
import Course from '../components/course/Course';
import {courseActionTypes} from "../actions/courseActions";

export default function courseReducer(state: Course[] = [] , action: IEvent): Course[] {
    switch(action.type) {
        case courseActionTypes.CREATE_COURSE:
            const course = (action as IAction<Course>).payload;
            return [...state, _.assign({}, course)];
        case courseActionTypes.LOAD_COURSES_SUCCESS:
            return (action as IAction<Course[]>).payload;
        default:
            return state;
    }
}