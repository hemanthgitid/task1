import React, { useState } from 'react';
import contentcss from '../Styles/Contentcss.module.css';

const Content = ({ data1,subindex,currentIndex }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      data1.push(uploadedFile);
    }
  };

  return (
    <div className={contentcss.main}>
      <div>
        {data1 && data1.length > 0 && (
          <>
            <p>{`Upload File for Application_${currentIndex} - Document_${subindex}`}</p>
            <input 
              type="file" 
              onChange={handleFileChange} 
              disabled={!!uploadedFile} 
            />
            {uploadedFile && (
              <p>{`Uploaded File: ${uploadedFile.name}`}</p>
            )}
          </>
        )}
        {
          !data1  && 
          <p>Empty Document :)</p>
        }
        {
          data1 &&  data1.length<=0 && 
          <p>Empty Application :)</p>
        }
      </div>
    </div>
  );
};

export default Content;
