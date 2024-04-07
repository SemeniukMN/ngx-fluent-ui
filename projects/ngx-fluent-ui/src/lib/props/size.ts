import { InjectionToken } from '@angular/core';

export type Size = 'small' | 'medium' | 'large';

export const SizeToken = new InjectionToken<Size>('Size property', {
  factory: () => 'medium',
});
