import React, { useRef, useState, useEffect } from 'react';
import classes from './resume_upload.module.scss';

const FileUpload = () => {
  const inputRef = useRef(null);
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState('');

  // Read from localStorage on mount
  useEffect(() => {
    const savedFile = localStorage.getItem('uploadedFile');
    const savedName = localStorage.getItem('uploadedFileName');
    if (savedFile && savedName) {
      setFileData(savedFile);
      setFileName(savedName);
    }
  }, []);

  const handleFile = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setFileData(base64);
      setFileName(file.name);
      localStorage.setItem('uploadedFile', base64);
      localStorage.setItem('uploadedFileName', file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleBrowse = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleRemove = () => {
    setFileData(null);
    setFileName('');
    localStorage.removeItem('uploadedFile');
    localStorage.removeItem('uploadedFileName');
  };

  return (
    <div
      className={classes['resumeupload__content']}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {!fileData ? (
        <>
          <div className={classes['resumeupload__icon']}>📄</div>
          <div className={classes['resumeupload__choosefile']}>
            Drag & drop your file here or
          </div>
          <button
            className={classes['resumeupload__browsefile']}
            onClick={() => inputRef.current.click()}
          >
            Browse File
          </button>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={handleBrowse}
          />
        </>
      ) : (
        <div className={classes['resumeupload__fileinfo']}>
          <p>Uploaded File: {fileName}</p>
          <button onClick={handleRemove}>Remove File</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
