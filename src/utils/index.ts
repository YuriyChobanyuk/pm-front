import { ValidationStatus } from '../common/components/ValidationTag';
import { ColorVariants } from '../styles/themes/types/theme-types';

export function getValidationColor(
  status: ValidationStatus,
  defaultColor: ColorVariants = 'info'
): ColorVariants {
  switch (status) {
    case 'valid':
      return 'success';
    case 'invalid':
      return 'danger';
    default:
      return defaultColor;
  }
}
