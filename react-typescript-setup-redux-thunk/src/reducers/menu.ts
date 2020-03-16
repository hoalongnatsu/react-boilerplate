/* Interface */
import { MenuState, Action } from 'interface';

import { GET_MENU_SUCCESS } from 'actions/menu';

const initialState: MenuState[] = [];

export default function menu(state: MenuState[] = initialState, action: Action): MenuState[] {
  switch (action.type) {
    case GET_MENU_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
}