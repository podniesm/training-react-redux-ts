import { IAction, IEvent } from '../actions/IAction';
import Author from '../components/course/Author';
import {authorActionTypes} from "../actions/authorActions";
import initialState from "./initialState";

export default function authorReducer(state: Author[] = initialState.authors , action: IEvent): Author[] {
    switch(action.type) {
        case authorActionTypes.LOAD_AUTHORS_SUCCESS:
            return (action as IAction<Author[]>).payload;
        default:
            return state;
    }
}