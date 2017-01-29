import {IAction} from "~react-redux~redux";

export interface IEvent extends IAction {
    type: string;
}

export interface IAction<TPayload> extends IEvent {
    payload:TPayload;
}