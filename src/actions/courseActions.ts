import { IAction } from './IAction';
import Course from '../components/course/Course';
import {IDispatch} from "~redux-thunk~redux";
import courseApi from '../api/mockCourseApi';
import {Dispatch} from "redux";

export const courseActionTypes = {
    LOAD_COURSES_SUCCESS: "LOAD_COURSES_SUCCESS"
};

export interface ICourseActions {
    loadCourses(): any;
}

export const courseActions: ICourseActions = {
    loadCourses(): any {
        return function (dispatch: IDispatch): void {
            courseApi.getAllCourses().then((courses: Course[]) => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch((error: Error) => {
                throw(error);
            })
        }
    }
};

function loadCoursesSuccess(courses: Course[]): IAction<Course[]> {
    return { type: courseActionTypes.LOAD_COURSES_SUCCESS, payload: courses };
}