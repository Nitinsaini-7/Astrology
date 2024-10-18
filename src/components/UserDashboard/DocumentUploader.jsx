import { useRef, useState } from 'react';

const DocumentUploader = ({ docType, onUpload }) => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview URL

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file, docType);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white w-40 text-sm py-2 rounded"
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

      {imagePreview && (
        <div className="mt-4">
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            className="w-20 object-cover rounded"
          />
        </div>
      )}
    </>
  );
};

export default DocumentUploader;
