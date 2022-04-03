import { FC, MouseEventHandler } from 'react';

import classes from './Button.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<Props> = ({
  children,
  className,
  disabled,
  style,
  type,
  onClick,
}) => (
  <button
    className={`${classes.button} ${className}`}
    style={style}
    type={type ?? 'button'}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
