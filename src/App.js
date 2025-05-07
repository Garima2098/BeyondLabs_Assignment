import './App.css';
import Header from './component/header/header';
import Stepper from './component/stepper/strepper';
import ResumeUpload from './component/resume_upload/resume_upload';
function App() {
  return (
    <div className="App">
      <Header />
      <Stepper />
      <ResumeUpload />
    </div>
  );
}

export default App;
