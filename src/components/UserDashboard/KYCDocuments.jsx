import DocumentUploader from './DocumentUploader';

const KycDocuments = ({ documents, onUpload }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md mt-4">
      <h3 className="text-lg font-semibold mb-2">KYC Documents</h3>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex justify-between items-center">
            <p>{doc.name}</p>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded ${doc.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {doc.status}
              </span>
              <DocumentUploader docType={doc.name} onUpload={onUpload} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KycDocuments;
