import './App.css';
import { useState } from 'react';
import Header from './component/header/header';
import Stepper from './component/stepper/strepper';
import ResumeUpload from './component/resume_upload/resume_upload';
function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    resume: null,
    name: '',
    email: '',
    phone: '',
    skills: [],
    education: '',
    summary: '',
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
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
    </div>
  );
}

export default App;
