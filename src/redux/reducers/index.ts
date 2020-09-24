import { combineReducers } from 'redux';
import { ImmutableObject } from 'seamless-immutable';

import { userReducer, UserState } from './user';

export interface RootState {
  users: ImmutableObject<UserState>;
}

export const appReducer = combineReducers<RootState>({
  users: userReducer,
});

export default appReducer;
