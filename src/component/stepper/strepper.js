import React from 'react';
import classes from './stepper.module.scss';

const steps = ['Upload', 'Info', 'Skills', 'Education', 'Summary', 'Done'];

export default function StepProgress({ currentStep }) {
  return (
    <div className={classes['stepper__container']}>
      {steps.map((label, index) => {
        const isCompleted = index + 1 < currentStep;
        const isActive = index + 1 === currentStep;

        return (
          <div
            className={classes['stepper__wrapper']}
            key={index}
          >
            <div
              className={`${classes['step-item']} ${
                isCompleted ? classes['completed'] : ''
              } ${isActive ? classes['active'] : ''}`}
            >
              <div className={classes['stepper__circle']}>
                {isCompleted ? (
                  <span className={classes['stepper__tick']}>&#10003;</span>
                ) : (
                  <div className={classes['stepper__dot']} />
                )}
              </div>
              <div className={classes['stepper__label']}>{label}</div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`${classes['stepper__line']} ${
                  index + 1 < currentStep ? classes['line-completed'] : ''
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
