import type { ReactNode } from 'react';
import { Children } from 'react';

export const getLabelFromChildren = (children: ReactNode) => {
  let label = '';

  Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
  });

  return label;
};
