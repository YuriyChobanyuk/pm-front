import { UserRole } from './user.interface';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavigationLink {
  path: string;
  label: string;
  restrictTo?: UserRole[];
}

export interface MenuLink extends NavigationLink{
  icon: IconDefinition;
}
