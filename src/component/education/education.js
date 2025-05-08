import React, { useState } from 'react';
import classes from './education.module.scss';

const Education = ({ nextStep, prevStep, updateData }) => {
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [educationList, setEducationList] = useState([]);

  const handleAddEducation = () => {
    if (degree && university && startYear && endYear) {
      const newEducation = { degree, university, startYear, endYear };
      setEducationList([...educationList, newEducation]);
      setDegree('');
      setUniversity('');
      setStartYear('');
      setEndYear('');
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...educationList];
    updatedList.splice(index, 1);
    setEducationList(updatedList);
  };

  const handleNext = () => {
    updateData({ education: educationList });
    nextStep();
  };

  return (
    <div className={classes.education}>
      <h2 className={classes.education__title}>Education</h2>

      <div className={classes.education__degree}>
        <div className={classes.education__formGroup}>
          <label>Degree</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="e.g., B.Tech"
          />
        </div>

        <div className={classes.education__formGroup}>
          <label>University</label>
          <input
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="e.g., Delhi University"
          />
        </div>
      </div>

      <div className={classes.education__datePicker}>
        <div className={classes.education__formGroup}>
          <label>Start Year</label>
          <input
            type="month"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
        </div>
        <div className={classes.education__formGroup}>
          <label>End Year</label>
          <input
            type="month"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
          />
        </div>
      </div>
      <button
        className={classes.education__addBtn}
        onClick={handleAddEducation}
      >
        Add
      </button>

      <div className={classes.education__list}>
        {educationList.map((item, index) => (
          <div
            key={index}
            className={classes.education__item}
          >
            <span>
              {item.degree}, {item.university} ({item.startYear} -{' '}
              {item.endYear})
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      <div className={classes.education__navButtons}>
        <button
          onClick={prevStep}
          className={classes.education__backBtn}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={classes.education__nextBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;
