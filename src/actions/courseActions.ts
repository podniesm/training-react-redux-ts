import { IAction } from './IAction';
import Course from '../components/course/Course';
import {IDispatch} from "~redux-thunk~redux";
import courseApi from '../api/mockCourseApi';

export const courseActionTypes = {
    LOAD_COURSES_SUCCESS: "LOAD_COURSES_SUCCESS",
    CREATE_COURSE_SUCCESS: "CREATE_COURSE_SUCCESS",
    UPDATE_COURSE_SUCCESS: "UPDATE_COURSE_SUCCESS"
};

export interface ICourseActions {
    loadCourses(): any;
    saveCourse(course: Course): any;
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
    },
    saveCourse(course: Course): any {
        return function (dispatch: IDispatch) {
            return courseApi.saveCourse(course).then((savedCourse: Course) => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
            }).catch((error: Error) => {
               throw(error);
            });
        }
    }
};

function loadCoursesSuccess(courses: Course[]): IAction<Course[]> {
    return { type: courseActionTypes.LOAD_COURSES_SUCCESS, payload: courses };
}

function createCourseSuccess(course: Course): IAction<Course> {
    return { type: courseActionTypes.CREATE_COURSE_SUCCESS, payload: course };
}

function updateCourseSuccess(course: Course): IAction<Course> {
    return { type: courseActionTypes.UPDATE_COURSE_SUCCESS, payload: course };
}