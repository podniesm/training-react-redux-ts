import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thnuk from 'redux-thunk';


export default function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thnuk, reduxImmutableStateInvariant())
    );
}


