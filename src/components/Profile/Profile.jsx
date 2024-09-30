// import React from 'react'

// const Profile = () => {
//   return (
//     <div className='my-14'>
//          <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-yellow-500 to-yellow-500 h-48"></div>
//         <div className="relative -mt-16 text-center">
//           <img
//             className="w-32 h-32 object-cover rounded-full border-4 border-white mx-auto"
//             src="https://via.placeholder.com/150"
//             alt="Astrologer"
//           />
//           <h1 className="text-3xl font-semibold text-gray-800 mt-4">John Doe</h1>
//           <p className="text-gray-600">Expert Astrologer</p>
//         </div>
//         <div className="p-6">
//           <p className="text-gray-700 text-sm mb-4">
//             With over 20 years of experience, John Doe has mastered the art of astrology and
//             has helped thousands of clients find clarity in their personal and professional lives.
//             John specializes in natal chart readings, relationship compatibility, and horary astrology.
//           </p>
//           <div className="flex justify-between text-gray-600 mb-4">
//             <div className="text-center">
//               <h2 className="font-bold text-lg">Experience</h2>
//               <p>20+ Years</p>
//             </div>
//             <div className="text-center">
//               <h2 className="font-bold text-lg">Consultations</h2>
//               <p>5000+</p>
//             </div>
//             <div className="text-center">
//               <h2 className="font-bold text-lg">Rating</h2>
//               <p>4.9/5</p>
//             </div>
//           </div>
//           <div className="flex space-x-4 justify-center">
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
//               Book a Consultation
//             </button>
//             <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
//               Contact Me
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Profile

import { useState } from 'react';
import AstrologerProfile from '../UserDashboard/AstrologerProfile';
import KycDocuments from '../UserDashboard/KYCDocuments';


const Profile = () => {
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
      <AstrologerProfile profile={profile} onSave={handleSaveProfile} />
      <KycDocuments documents={documents} onUpload={handleUploadDocument} />
    </div>
  );
};

export default Profile;
