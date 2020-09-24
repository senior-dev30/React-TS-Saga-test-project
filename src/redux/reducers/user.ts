import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestUsers: [],
  successUsers: ['data'],
  failureUsers: ['error'],
});

export const UserActionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export interface UserState {
  fetching: boolean;
  data: Array<UserData>;
  error?: string;
}

export const INITIAL_STATE = Immutable<UserState>({
  data: [],
  fetching: false,
  error: undefined,
});

type State = ImmutableObject<UserState>;
type SuccessAction = ArrayAction<UserData>;

/* ------------- Reducers ------------- */
// request the data from an api
const request = (state: State) => state.merge({ fetching: true });

// successful api lookup
const success = (state: State, { data }: SuccessAction) =>
  state.merge({ fetching: false, data });

// Something went wrong somewhere.
const failure = (state: State, { error }: ErrorAction) =>
  state.merge({ fetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_USERS]: request,
  [Types.SUCCESS_USERS]: success,
  [Types.FAILURE_USERS]: failure,
});
