import {IDispatch} from "~redux-thunk~redux";
import authorApi from '../api/mockAuthorApi';
import Author from "../components/course/Author";
import {IAction} from "./IAction";

export const authorActionTypes = {
    LOAD_AUTHORS_SUCCESS: 'LOAD_AUTHORS_SUCCESS'
};

export interface IAuthorActions {
    loadAuthors(): any
}

export const authorActions: IAuthorActions = {
    loadAuthors(): any {
        return function(dispatch: IDispatch): void {
            authorApi.getAllAuthors().then((authors: Author[]) => {
                dispatch(loadAuthorsSuccess(authors))
            })
            .catch((error: Error) => {
                throw(error);
            })
        }
    }
};

function loadAuthorsSuccess(authors: Author[]): IAction<Author[]> {
    return { type: authorActionTypes.LOAD_AUTHORS_SUCCESS, payload: authors };
}