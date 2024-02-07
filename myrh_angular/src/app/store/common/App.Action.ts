import { createAction, props } from '@ngrx/store';

export const SHOW_ALERT = '[app] show alert';
export const EMPTY_ACTION = '[app] empty';

export const showAlert = createAction(
  SHOW_ALERT,
  props<{ message: string; resultType: string }>()
);
export const emptyAction = createAction(EMPTY_ACTION);
