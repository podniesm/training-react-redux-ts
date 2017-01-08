import { IAction } from './IAction';
import Course from '../components/course/Course';
import {IDispatch} from "~redux-thunk~redux";
import courseApi from '../api/mockCourseApi';

export const courseActionTypes = {
    CREATE_COURSE: "CREATE_COURSE",
    LOAD_COURSES_SUCCESS: "LOAD_COURSES_SUCCESS"
};

export interface ICourseActions {
    createCourse(course: Course): IAction<Course>;
    loadCourses(): any;
}

export const courseActions: ICourseActions = {
    createCourse(course: Course): IAction<Course> {
        return { type: courseActionTypes.CREATE_COURSE, payload: course };
    },
    loadCourses(): (d: IDispatch) => void {
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