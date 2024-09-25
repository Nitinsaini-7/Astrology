import { useRef } from 'react';

const DocumentUploader = ({ docType, onUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file, docType);
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => fileInputRef.current.click()}
      >
        Upload {docType}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
    </>
  );
};

export default DocumentUploader;
