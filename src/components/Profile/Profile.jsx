import { useState } from 'react';
import AstrologerProfile from '../UserDashboard/AstrologerProfile';
import KycDocuments from '../UserDashboard/KYCDocuments';
import SignIn from '../Auth/SignIn'; // Import SignIn component

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  const [profile, setProfile] = useState({
    name: 'John Doe',
    experience: 10,
    rating: 4.5,
    image: 'https://via.placeholder.com/150',
  });

  const [documents, setDocuments] = useState([
    { id: 1, name: 'PAN Card', status: 'pending' },
    { id: 2, name: 'Aadhar Card', status: 'pending' },
    { id: 3, name: 'Passbook', status: 'pending' },
  ]);

  const handleSaveProfile = (newProfile) => {
    setProfile(newProfile);
  };

  const handleUploadDocument = (file, docType) => {
    const updatedDocs = documents.map((doc) =>
      doc.name === docType ? { ...doc, status: 'uploaded' } : doc
    );
    setDocuments(updatedDocs);
  };

  return (
    <div className="container mx-auto p-4 my-20">
      {isLoggedIn ? (
        <>
          <AstrologerProfile profile={profile} onSave={handleSaveProfile} />
          <KycDocuments documents={documents} onUpload={handleUploadDocument} />
        </>
      ) : (
        <SignIn onLogin={() => setIsLoggedIn(true)} /> // Show SignIn when logged out
      )}
    </div>
  );
};

export default Profile;
