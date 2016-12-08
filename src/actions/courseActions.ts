import { IAction } from './IAction';
import Course from '../components/course/Course';

export function createCourse(course: Course): IAction<Course> {
    return { type: 'CREATE_COURSE', payload: course };
}