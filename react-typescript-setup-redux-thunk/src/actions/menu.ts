import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import menu from 'services/menu';

export const GET_MENU_REQUEST = 'GET_MENU_REQUEST';
export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS';

export function get_all_menu(): ThunkAction<void, {}, {}, AnyAction> {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    menu.get_all_menu().then(data => {
      dispatch({
        type: GET_MENU_SUCCESS,
        payload: data
      })
    })
  }
}