import React, { useState, useEffect } from 'react';
import classes from './basic_info.module.scss';

const BasicInfo = ({ nextStep, prevStep, updateData, formData }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
  });

  const [errors, setErrors] = useState({});

  // Load data from localStorage or props
  useEffect(() => {
    const savedData = localStorage.getItem('basicInfoForm');
    if (savedData) {
      setForm(JSON.parse(savedData));
    } else if (formData) {
      setForm(formData);
    }
  }, [formData]);

  const handleChange = (e) => {
    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(updatedForm);
    localStorage.setItem('basicInfoForm', JSON.stringify(updatedForm));

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.contact.trim()) newErrors.contact = 'Contact is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateData(form);
      localStorage.removeItem('basicInfoForm'); // Optional: clean up if needed
      nextStep();
    }
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div className={classes['basicinfo']}>
      <h2 className={classes['basicinfo__title']}>Basic Information</h2>

      <div className={classes['basicinfo__form']}>
        <div className={classes['basicinfo__field']}>
          <label className={classes['basicinfo__attribute']}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className={errors.firstName ? classes['error'] : ''}
          />
          {errors.firstName && (
            <div className={classes['error-text']}>{errors.firstName}</div>
          )}
        </div>

        <div className={classes['basicinfo__field']}>
          <label className={classes['basicinfo__attribute']}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className={errors.lastName ? classes['error'] : ''}
          />
          {errors.lastName && (
            <div className={classes['error-text']}>{errors.lastName}</div>
          )}
        </div>
      </div>

      <div className={classes['basicinfo__form']}>
        <div className={classes['basicinfo__field']}>
          <label className={classes['basicinfo__attribute']}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? classes['error'] : ''}
          />
          {errors.email && (
            <div className={classes['error-text']}>{errors.email}</div>
          )}
        </div>

        <div className={classes['basicinfo__field']}>
          <label className={classes['basicinfo__attribute']}>Contact</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className={errors.contact ? classes['error'] : ''}
          />
          {errors.contact && (
            <div className={classes['error-text']}>{errors.contact}</div>
          )}
        </div>
      </div>

      <div className={classes['basicinfo__buttons']}>
        <button
          onClick={handlePrev}
          className={classes['basicinfo__prevbtn']}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={classes['basicinfo__nextbtn']}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
