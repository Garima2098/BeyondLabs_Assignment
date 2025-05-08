import React, { useState } from 'react';
import classes from './skill_sets.module.scss';

const SkillSets = ({ nextStep, prevStep, updateData }) => {
  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const handleAddSkill = () => {
    if (skill && level) {
      const newSkill = { skill, level };
      setSkillsList([...skillsList, newSkill]);
      setSkill('');
      setLevel('');
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...skillsList];
    updatedList.splice(index, 1);
    setSkillsList(updatedList);
  };

  const handleNext = () => {
    updateData({ skills: skillsList });
    nextStep();
  };

  return (
    <div className={classes['skillSets']}>
      <h2 className={classes['skillSets__heading']}>Add Skill Sets</h2>

      <div className={classes['skillSets__inputRow']}>
        <div className={classes['skillSets__inputBlock']}>
          <label className={classes['skillSets__name']}>Skill</label>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="e.g., React"
          />
        </div>
        <div className={classes['skillSets__inputBlock']}>
          <label>Experience Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      </div>

      <button
        className={classes['skillSets__addButton']}
        onClick={handleAddSkill}
      >
        Skill +
      </button>

      <div className={classes['skillSets__skillList']}>
        {skillsList.map((item, index) => (
          <div
            key={index}
            className={classes['skillSets__skillItem']}
          >
            <span>
              {item.skill} - {item.level}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      <div className={classes['skillSets__navButtons']}>
        <button
          onClick={prevStep}
          className={classes['skillSets__prevBtn']}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={classes['skillSets__nextBtn']}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SkillSets;
