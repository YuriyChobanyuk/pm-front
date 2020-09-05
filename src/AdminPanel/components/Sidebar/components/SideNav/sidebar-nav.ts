import {
  ADMIN_DASHBOARD_PATH,
  ADMIN_SHOWS_PATH,
  ADMIN_USERS_PATH,
} from '../../../../../common/constants';
import {
  faTachometerAlt,
  faUsers,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { MenuLink } from '../../../../../interfaces';

export const menuOptions: MenuLink[] = [
  {
    label: 'Shows management',
    path: ADMIN_SHOWS_PATH,
    icon: faVideo,
  },
  {
    label: 'Activity dashboard',
    path: ADMIN_DASHBOARD_PATH,
    icon: faTachometerAlt,
  },
  {
    label: 'User management',
    path: ADMIN_USERS_PATH,
    icon: faUsers,
  },
];
