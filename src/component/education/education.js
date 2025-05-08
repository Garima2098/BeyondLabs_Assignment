import React, { useState } from 'react';
import styles from './education.module.scss';

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
    <div className={styles.education}>
      <h2>Education</h2>

      <div className={styles.inputRow}>
        <div className={styles.inputBlock}>
          <label>Degree</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="e.g., B.Tech"
          />
        </div>
        <div className={styles.inputBlock}>
          <label>University</label>
          <input
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="e.g., Delhi University"
          />
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputBlock}>
          <label>Start Year</label>
          <input
            type="month"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
        </div>
        <div className={styles.inputBlock}>
          <label>End Year</label>
          <input
            type="month"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
          />
        </div>
        <button
          className={styles.addButton}
          onClick={handleAddEducation}
        >
          Add
        </button>
      </div>

      <div className={styles.educationList}>
        {educationList.map((item, index) => (
          <div
            key={index}
            className={styles.educationItem}
          >
            <span>
              {item.degree}, {item.university} ({item.startYear} -{' '}
              {item.endYear})
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      <div className={styles.navButtons}>
        <button
          onClick={prevStep}
          className={styles.prevBtn}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={styles.nextBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;
