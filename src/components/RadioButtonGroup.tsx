import React from 'react';
import "../styles/radioButtonGroup.css";

export type RadioButtonSize = 'sm' | 'md';

export interface RadioButtonProps {
  size?: RadioButtonSize;
  disabled?: boolean;
  name?: string;
  description?: string;
  active: boolean;
  id: string;
  onChange: () => void;
  onClick: () => void;
  fullWidth?: boolean;
  'aria-label'?: string;
  children?: React.ReactNode;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      children,
      active = false,
      disabled = false,
      size = 'md',
      onChange,
      onClick,
      id,
      name = undefined,
      description,
      fullWidth,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    return (
      <>
        <input
          type="radio"
          className='radio'
          onChange={onChange}
          onClick={onClick}
          disabled={disabled}
          id={id}
          checked={active}
          name={name}
          aria-label={ariaLabel}
          ref={ref}
        />
        <label className="radioLabel" htmlFor={id} title={description}>
          {children}
        </label>
      </>
    );
  }
);
