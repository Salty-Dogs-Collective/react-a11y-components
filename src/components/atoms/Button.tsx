import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { MappedClassNames } from '../../types/class-names';
import { mergeOptionalClassNameWithList } from '../../utils/class-names';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'normal' | 'large';
  type?: 'button' | 'submit' | 'reset';
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  variant = 'primary',
  size = 'normal',
  type = 'button',
  className,
  ...rest
}: ButtonProps) => {
  const variantClassNames: MappedClassNames<NonNullable<ButtonProps['variant']>> = {
    primary: [
      'text-stone-900',
      'enabled:hover:text-white',
      'bg-red-500',
      'enabled:hover:bg-red-700',
      'enabled:focus:ring-red-400',
    ],
    secondary: [
      'text-slate-900',
      'enabled:hover:text-white',
      'bg-sky-500',
      'enabled:hover:bg-sky-700',
      'enabled:focus:ring-sky-400',
    ],
  };
  const sizeClassNames: MappedClassNames<NonNullable<ButtonProps['size']>> = {
    small: ['text-sm'],
    normal: ['text-base'],
    large: ['text-lg'],
  };
  const classNames = [
    'mr-4',
    'py-2',
    'px-4',
    'font-bold',
    'rounded-lg',
    'shadow-md',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-opacity-75',
    'cursor-pointer',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    ...variantClassNames[variant],
    ...sizeClassNames[size],
  ];

  return (
    <button className={mergeOptionalClassNameWithList(classNames, className)} type={type} {...rest}>
      {children}
    </button>
  );
};
