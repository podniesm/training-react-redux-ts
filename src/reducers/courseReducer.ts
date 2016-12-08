import * as _ from 'lodash';
import { IAction, IEvent } from '../actions/IAction';
import Course from '../components/course/Course';

declare interface ObjectContructor {
    assign(...objects: Object[]): Object;
}

export default function courseReducer(state: Course[] = [] , action: IEvent): Course[] { 
    switch(action.type) {
        case 'CREATE_COURSE':
            const course = (action as IAction<Course>).payload;
            return [...state, _.assign({}, course)];
        default:
            return state;
    }
}