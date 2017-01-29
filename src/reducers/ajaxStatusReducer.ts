import initialState from "./initialState";
import {IEvent} from "../actions/IAction";
import * as ajaxStatusActions from "../actions/ajaxStatusActions";
import {AJAX_CALL_ERROR} from "../actions/ajaxStatusActions";

export default function ajaxStatusReducer (state: number = initialState.ajaxCallInProgressCount, action: IEvent) : number {
    if(action.type == ajaxStatusActions.BEGIN_AJAX_CALL) {
        return state + 1;
    }
    if(isAjaxCallError(action) || isActionSuccess(action)) {
        return state - 1;
    }
    return state;
}

function isActionSuccess(event: IEvent) {
    const eventType = event.type;
    return eventType.substring(eventType.length - 8) == '_SUCCESS';
}

function isAjaxCallError(event: IEvent) {
    return event.type == AJAX_CALL_ERROR;
}