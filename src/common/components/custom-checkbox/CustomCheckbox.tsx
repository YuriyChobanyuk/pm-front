import React, { ChangeEvent } from 'react';

interface Props {
  className?: string;
  label: string;
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<Props> = ({
  checked,
  id,
  label,
  onChange,
  className,
}) => {
  return (
    <div className={`custom-control custom-checkbox ${className}`}>
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
