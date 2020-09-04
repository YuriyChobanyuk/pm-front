import {ADMIN_DASHBOARD_PATH, ADMIN_SHOWS_PATH, ADMIN_USERS_PATH} from "../../../../../common/constants/routes-constants";
import {faTachometerAlt, faUsers, faVideo} from "@fortawesome/free-solid-svg-icons";

export const menuOptions = [
  {
    title: 'Shows management',
    path: ADMIN_SHOWS_PATH,
    icon: faVideo,
  },
  {
    title: 'Activity dashboard',
    path: ADMIN_DASHBOARD_PATH,
    icon: faTachometerAlt,
  },
  {
    title: 'User management',
    path: ADMIN_USERS_PATH,
    icon: faUsers,
  },
];
