import React from 'react';

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
  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      <h2>Summary</h2>

      <div>
        <h3>Personal Details</h3>
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Contact:</strong> {formData.contact}
        </p>
      </div>

      <div>
        <h3>Resume</h3>
        {resumeFile ? (
          <>
            <p>{resumeName}</p>
            <button onClick={downloadResume}>Download Resume</button>
          </>
        ) : (
          <p>No resume uploaded.</p>
        )}
      </div>

      <div>
        <h3>Skills</h3>
        {skills.length > 0 ? (
          <ul>
            {skills.map((item, index) => (
              <li key={index}>
                {item.skill} - {item.level}
              </li>
            ))}
          </ul>
        ) : (
          <p>No skills added.</p>
        )}
      </div>

      <div>
        <h3>Education</h3>
        {education.length > 0 ? (
          <ul>
            {education.map((item, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        ) : (
          <p>No education details added.</p>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={prevStep}>Previous</button>
        <button
          onClick={handleNext}
          style={{ marginLeft: '10px' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Summary;
