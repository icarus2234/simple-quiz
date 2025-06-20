import classNames from 'classnames';
import { Control, Controller, Path } from 'react-hook-form';

import styles from './plan-radio-button.module.css';

interface PlanRadioButtonProps<T extends object> {
  control: Control<T, object>;
  name: Path<T>;
  options: Array<{
    value: string;
    label: string;
    price: number;
    popular?: boolean;
  }>;
}

export default function PlanRadioButton<T extends object>({
  control,
  name,
  options,
}: PlanRadioButtonProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={classNames(styles.option, {
                [styles.selectedOption]: field.value === option.value,
                [styles.withPopular]: option.popular,
              })}
            >
              {option.popular && (
                <div
                  className={classNames(styles.popular, {
                    [styles.selectedPopular]: field.value === option.value,
                  })}
                >
                  Most Popular
                </div>
              )}
              <label className={styles.planBox} key={option.value}>
                <div className={styles.left}>
                  <input
                    type="radio"
                    value={option.value}
                    checked={field.value === option.value}
                    onChange={field.onChange}
                    className={styles.radio}
                  />
                  <span className={styles.label}>{option.label}</span>
                </div>
                <div className={styles.priceBox}>
                  <span className={styles.currency}>$</span>
                  <div className={styles.price}>{option.price}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      )}
    />
  );
}
