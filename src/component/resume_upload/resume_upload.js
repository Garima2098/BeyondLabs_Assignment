import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as CloudAdd } from '../../assets/icons/cloud-add.svg';
import { ReactComponent as Loading } from '../../assets/icons/uploadicon.svg';
import { ReactComponent as Completed } from '../../assets/icons/completed.svg';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { ReactComponent as Pdf } from '../../assets/images/pdf.svg';
import classes from './resume_upload.module.scss';

const ResumeUpload = ({ nextStep, updateData }) => {
  const fileInputRef = useRef(null);
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    const storedFile = localStorage.getItem('uploadedFile');
    const storedName = localStorage.getItem('uploadedFileName');
    if (storedFile && storedName) {
      setFileData(storedFile);
      setFileName(storedName);
    }
  }, []);

  const handleFile = (file) => {
    if (!file) return;

    // File type and size validation
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (!allowedTypes.includes(file.type)) {
      setUploadError('Invalid file type. Please upload a PDF or DOC file.');
      return;
    }

    if (file.size > maxSize) {
      setUploadError(
        'File size exceeds the 5 MB limit. Please upload a smaller file.'
      );
      return;
    }

    setUploadError(''); // Clear previous errors
    setIsUploading(true);

    const reader = new FileReader();
    reader.onload = () => {
      setTimeout(() => {
        const base64 = reader.result;
        setFileData(base64);
        setFileName(file.name);
        localStorage.setItem('uploadedFile', base64);
        localStorage.setItem('uploadedFileName', file.name);
        setIsUploading(false);
      }, 1000);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleBrowse = () => fileInputRef.current.click();

  const removeFile = () => {
    const confirmRemove = window.confirm(
      'Are you sure you want to remove the uploaded file?'
    );
    if (confirmRemove) {
      setFileData(null);
      setFileName('');
      localStorage.removeItem('uploadedFile');
      localStorage.removeItem('uploadedFileName');
    }
  };

  const handleNext = () => {
    if (!fileData) {
      alert('Please upload your resume before proceeding.');
      return;
    }
    updateData({ resume: fileData, resumeName: fileName });
    nextStep();
  };

  return (
    <div
      className={classes['resumeupload']}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className={classes['resumeupload__title']}>Upload Resume</div>
      <div className={classes['resumeupload__content']}>
        <div className={classes['resumeupload__icon']}>
          <CloudAdd />
        </div>
        <div className={classes['resumeupload__choosefile']}>
          Choose a file or drag & drop it here
        </div>
        <div className={classes['resumeupload__upload']}>
          Please Upload Your Resume (PDF, DOC formats only)
        </div>
        <button
          onClick={handleBrowse}
          className={classes['resumeupload__browsefile']}
        >
          Browse File
        </button>
      </div>

      {uploadError && (
        <div className={classes['resumeupload__error']}>{uploadError}</div>
      )}

      <div className={classes['resumeupload__resumedrop']}>
        {isUploading ? (
          <div className={classes['resumeupload__loading']}>
            Loading... <Loading />
            <div className={classes['resumeupload__progress']}>
              <div className={classes['resumeupload__progressbar']}></div>
            </div>
          </div>
        ) : (
          <>
            {fileData && (
              <>
                <div className={classes['resumeupload__fileinfo']}>
                  <Pdf />
                  <div className={classes['resumeupload__filename']}>
                    {fileName}
                    <Completed />
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className={classes['resumeupload__remove']}
                >
                  <Trash />
                </button>
              </>
            )}
          </>
        )}

        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>

      <div className={classes['resumeupload__nextbtnwrapper']}>
        <button className={classes['resumeupload__prevbtn']}>Prev</button>
        <button
          onClick={handleNext}
          className={classes['resumeupload__nextbtn']}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
