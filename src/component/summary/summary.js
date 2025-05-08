import React from 'react';
import { ReactComponent as PdfDownload } from '../../assets/icons/downloadPdf.svg';
import classes from './summary.module.scss';

const Summary = ({ formData, prevStep, nextStep }) => {
  const resumeFile = formData.resume;
  const resumeName = formData.resumeName;
  const skills = formData.skills || [];
  const education = formData.education || [];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = resumeName;
    link.click();
  };

  return (
    <div className={classes.summary}>
      <h2 className={classes['summary__title']}>Summary</h2>

      <div className={classes['summary__section']}>
        <h2 className={classes['summary__subtitle']}>Resume</h2>
        <div className={classes['summary__resume-info']}>
          <h3 className={classes['summary__label']}>File Name</h3>
          {resumeFile ? (
            <div className={classes['summary__file-block']}>
              <p className={classes['summary__file-name']}>{resumeName}</p>
              <button
                className={classes['summary__download-button']}
                onClick={downloadResume}
              >
                <PdfDownload className={classes['summary__icon']} />
              </button>
            </div>
          ) : (
            <p className={classes['summary__empty']}>No resume uploaded.</p>
          )}
        </div>
      </div>

      <div className={classes['summary__basicinfo']}>
        <h3 className={classes['summary__basicinfo-heading']}>
          Basic Information
        </h3>
        <div className={classes['summary__basiciinfo']}>
          <div className={classes['summary__field']}>
            <strong>First Name:</strong> {formData.firstName}
          </div>
          <div className={classes['summary__field']}>
            <strong>Last Name:</strong> {formData.lastName}
          </div>
          <div className={classes['summary__field']}>
            <strong>Email:</strong> {formData.email}
          </div>
          <div className={classes['summary__field']}>
            <strong>Contact:</strong> {formData.contact}
          </div>
        </div>
      </div>

      <div className={classes['summary__section']}>
        <h3 className={classes['summary__subtitle']}>Skills</h3>
        {skills.length > 0 ? (
          <ul className={classes['summary__list']}>
            {skills.map((item, index) => (
              <li
                className={classes['summary__list-item']}
                key={index}
              >
                {item.skill} - {item.level}
              </li>
            ))}
          </ul>
        ) : (
          <p className={classes['summary__empty']}>No skills added.</p>
        )}
      </div>

      <div className={classes['summary__section']}>
        <h3 className={classes['summary__subtitle']}>Education</h3>
        {education.length > 0 ? (
          <div className={classes['summary__list']}>
            {education.map((item, index) => (
              <div
                className={classes['summary__list-item']}
                key={index}
              >
                {item.degree}, {item.university} (
                {new Date(item.startYear).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                -{' '}
                {new Date(item.endYear).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}
                )
              </div>
            ))}
          </div>
        ) : (
          <p className={classes['summary__empty']}>
            No education details added.
          </p>
        )}
      </div>

      <div className={classes['summary__actions']}>
        <button
          className={classes['summary__button']}
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className={`${classes['summary__button']} ${classes['summary__button--next']}`}
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Summary;
