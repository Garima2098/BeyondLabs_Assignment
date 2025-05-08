import './App.css';
import { useEffect, useState } from 'react';
import Header from './component/header/header';
import Stepper from './component/stepper/strepper';
import ResumeUpload from './component/resume_upload/resume_upload';
import BasicInfo from './component/basic_info/basic_info';
import Skillset from './component/skill_sets/skill_set';
import Education from './component/education/education';
import Summary from './component/summary/summary';
import Completed from './component/completed/completed';
function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(() => {
    const stored = localStorage.getItem('resumeFormData');
    return stored
      ? JSON.parse(stored)
      : {
          resume: null,
          basicInfo: {},
          skills: [],
          education: [],
        };
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateData = (newData) => {
    const updated = { ...formData, ...newData };
    setFormData(updated);
    localStorage.setItem('resumeFormData', JSON.stringify(updated));
  };

  return (
    <div className="App">
      <Header />
      <Stepper currentStep={step} />

      {step === 1 && (
        <ResumeUpload
          nextStep={nextStep}
          updateData={updateData}
        />
      )}
      {step === 2 && (
        <BasicInfo
          nextStep={nextStep}
          prevStep={prevStep}
          updateData={updateData}
        />
      )}
      {step === 3 && (
        <Skillset
          nextStep={nextStep}
          prevStep={prevStep}
          updateData={updateData}
        />
      )}
      {step === 4 && (
        <Education
          nextStep={nextStep}
          prevStep={prevStep}
          updateData={updateData}
        />
      )}
      {step === 5 && (
        <Summary
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 6 && (
        <Completed
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
    </div>
  );
}

export default App;
