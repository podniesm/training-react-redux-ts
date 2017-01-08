import {IAction} from "~react-redux~redux";

export interface IEvent extends IAction {
}

export interface IAction<TPayload> extends IEvent {
    type: string;
    payload:TPayload;
}