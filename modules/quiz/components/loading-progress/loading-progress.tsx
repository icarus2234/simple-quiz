// components/AnimatedProgress.js
import 'react-circular-progressbar/dist/styles.css';

import { CSSProperties, FC, useEffect, useState } from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

import { Typography } from '@/modules/layout';

interface LoadingProgressProps {
  targetPercentage: number;
  duration?: number;
  style?: CSSProperties;
}

export const LoadingProgress: FC<LoadingProgressProps> = ({
  targetPercentage,
  duration = 2000, // Default duration is 2000ms (2 seconds)
  style,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const step = targetPercentage / (duration / 120); // Calculate step based on duration
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= targetPercentage) {
          clearInterval(timer);
          return targetPercentage;
        }
        return prev + step;
      });
    }, 120); // Update every 20ms
    return () => clearInterval(timer);
  }, [targetPercentage, duration]);

  return (
    <div style={{ width: 200, height: 200, ...style }}>
      <CircularProgressbarWithChildren
        value={value}
        styles={buildStyles({
          pathColor: '#00b25d',
          trailColor: '#f0f0f0',
          strokeLinecap: 'round',
        })}
      >
        <Typography variant="body3">{value}%</Typography>
      </CircularProgressbarWithChildren>
    </div>
  );
};
