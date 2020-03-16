import menu from 'assets/json/menu.json';

/* Interface */
import { MenuState } from 'interface';

function get_all_menu(): Promise<MenuState[]> {
  return new Promise((resolve) => {
    resolve(menu)
  })
}

export default {
  get_all_menu
}