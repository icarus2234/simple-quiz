import classNames from 'classnames';
import { Control, Controller, Path } from 'react-hook-form';

import styles from './input.module.css';

interface InputProps<T extends object> {
  control: Control<T, object>;
  name: Path<T>;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
}

export default function Input<T extends object>({
  name,
  control,
  placeholder,
  type = 'text',
  disabled,
  label,
  required,
}: InputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <div
            className={classNames(styles.inputWrapper, {
              [styles.error]: error,
            })}
          >
            {label && (
              <label htmlFor={name} className={styles.label}>
                {label} {required && '*'}
              </label>
            )}
            <input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={classNames(styles.input, { [styles.error]: error })}
            />
          </div>
          {error && (
            <span className={styles.errorMessage}>{error.message}</span>
          )}
        </div>
      )}
    />
  );
}
