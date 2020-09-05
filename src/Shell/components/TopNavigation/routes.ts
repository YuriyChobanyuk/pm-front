import { ADMIN_PATH, HOME_PATH, SHOWS_PATH } from '../../../common/constants';
import { UserRole, NavigationLink } from '../../../interfaces';

export const routes: NavigationLink[] = [
  { path: HOME_PATH, label: 'Personal manager', restrictTo: [] },
  { path: SHOWS_PATH, label: 'Shows', restrictTo: [UserRole.USER] },
  { path: ADMIN_PATH, label: 'Admin panel', restrictTo: [UserRole.ADMIN] },
];
