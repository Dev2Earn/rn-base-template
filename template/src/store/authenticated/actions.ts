import { ILoginBody } from '@src/models/authenticated';
import { LOGIN_REQUEST } from '@src/store/authenticated/types';

// saga dispatch actions
export const loginRequest = (payload: ILoginBody) => ({
  type: LOGIN_REQUEST,
  payload
});