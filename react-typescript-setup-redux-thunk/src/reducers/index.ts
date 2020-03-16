import { combineReducers } from 'redux';

/* Interface */
import { RootState } from 'interface';

import menu from './menu';

export default combineReducers<RootState>({
  menu
})