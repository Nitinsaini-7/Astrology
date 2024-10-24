// // import { useState } from 'react';
// // import AstrologerProfile from '../UserDashboard/AstrologerProfile';
// // import KycDocuments from '../UserDashboard/KYCDocuments';
// // import SignIn from '../Auth/SignIn'; // Import SignIn component

// // const Profile = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

// //   const [profile, setProfile] = useState({
// //     name: 'John Doe',
// //     experience: 10,
// //     rating: 4.5,
// //     image: 'https://via.placeholder.com/150',
// //   });

// //   const [documents, setDocuments] = useState([
// //     { id: 1, name: 'PAN Card', status: 'pending' },
// //     { id: 2, name: 'Aadhar Card', status: 'pending' },
// //     { id: 3, name: 'Passbook', status: 'pending' },
// //   ]);

// //   const handleSaveProfile = (newProfile) => {
// //     setProfile(newProfile);
// //   };

// //   const handleUploadDocument = (file, docType) => {
// //     const updatedDocs = documents.map((doc) =>
// //       doc.name === docType ? { ...doc, status: 'uploaded' } : doc
// //     );
// //     setDocuments(updatedDocs);
// //   };

// //   return (
// //     <div className="container mx-auto p-4 my-20">
// //       {!isLoggedIn ? (
// //         <>
// //           <AstrologerProfile profile={profile} onSave={handleSaveProfile} />
// //           <KycDocuments documents={documents} onUpload={handleUploadDocument} />
// //         </>
// //       ) : (
// //         <SignIn onLogin={() => setIsLoggedIn(false)} /> // Show SignIn when logged out
// //       )}
// //     </div>
// //   );
// // };

// // export default Profile;
// import React from 'react'
// import { useState, useRef, useEffect } from "react";
// import DefaultImage from "/user.png";
// import EditIcon from "/edit.png";
// import UploadingAnimation from "/uploading.gif";

// const Skeleton = ({ className }) => (
//   <div className={`animate-pulse bg-gray-300 ${className}`}></div>
// );

// const Profile = ({ profile, onSave }) => {
//   const [formData, setFormData] = useState(null);
//   const [avatarURL, setAvatarURL] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true); // State to manage loading
//   const fileUploadRef = useRef();

//   useEffect(() => {
//     // Simulate data loading from localStorage
//     const savedProfile = localStorage.getItem("astrologerProfile");
//     const savedAvatarURL = localStorage.getItem("astrologerAvatar");

//     setTimeout(() => {
//       setFormData(savedProfile ? JSON.parse(savedProfile) : profile);
//       setAvatarURL(savedAvatarURL || DefaultImage);
//       setLoading(false); // Data is loaded, turn off skeleton
//     }, 1000); // Simulated delay
//   }, [profile]);

//   useEffect(() => {
//     if (formData) {
//       localStorage.setItem("astrologerProfile", JSON.stringify(formData));
//     }
//   }, [formData]);

//   useEffect(() => {
//     if (avatarURL) {
//       localStorage.setItem("astrologerAvatar", avatarURL);
//     }
//   }, [avatarURL]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     onSave(formData);
//     setIsEditing(false);
//   };

//   const handleImageUpload = (event) => {
//     event.preventDefault();
//     fileUploadRef.current.click();
//   };

//   const uploadImageDisplay = async () => {
//     try {
//       setAvatarURL(UploadingAnimation); // Show uploading animation while uploading
//       const uploadedFile = fileUploadRef.current.files[0];
//       const formData = new FormData();
//       formData.append("file", uploadedFile);

//       const response = await fetch(
//         "https://api.escuelajs.co/api/v1/files/upload",
//         {
//           method: "post",
//           body: formData,
//         }
//       );

//       if (response.status === 201) {
//         const data = await response.json();
//         setAvatarURL(data?.location); // Set new avatar URL
//       }
//     } catch (error) {
//       console.error(error);
//       setAvatarURL(DefaultImage); // Fallback to default image in case of error
//     }
//   };

//   return (
//     <div className="p-4 bg-white rounded shadow-md">
//       <div className="sm:flex items-center space-x-4">
//         <div className="relative h-60 w-60 sm:m-10 m-auto">
//           <div className="bg-gray-200 rounded-full">
//             {loading ? (
//               <Skeleton className="sm:h-60 sm:w-60 rounded-full" />
//             ) : (
//               <img
//                 src={avatarURL}
//                 alt="Avatar"
//                 className="sm:h-60 sm:w-60 rounded-full border-2 border-yellow-500"
//               />
//             )}
//           </div>

//           <form id="form" encType="multipart/form-data">
//             {!loading && (
//               <button
//                 type="submit"
//                 onClick={handleImageUpload}
//                 className="flex-center absolute bg-yellow-500 p-2 bottom-12 right-0 h-9 w-9 rounded-full"
//               >
//                 <img src={EditIcon} alt="Edit" className="object-cover" />
//               </button>
//             )}
//             <input
//               type="file"
//               id="file"
//               ref={fileUploadRef}
//               onChange={uploadImageDisplay}
//               hidden
//             />
//           </form>
//         </div>
//         <div className="mt-10">
//           {loading ? (
//             <Skeleton className="h-8 w-48 sm:h-12 sm:w-64 mb-4" />
//           ) : isEditing ? (
//             <div className="grid mb-5">
//               <label htmlFor="" className="font-semibold">Edit Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="border-b mr-5 border-gray-300 text-gray-500 focus:outline-none"
//               />
//             </div>
//           ) : (
//             <p className="sm:text-5xl text-2xl font-semibold">{formData.name}</p>
//           )}

//           {loading ? (
//             <Skeleton className="h-4 w-32 sm:h-6 sm:w-40" />
//           ) : isEditing ? (
//             <div className="grid">
//               <label htmlFor="" className="font-semibold">Edit Experience</label>
//               <input
//                 type="number"
//                 name="experience"
//                 placeholder="Experience"
//                 value={formData.experience}
//                 onChange={handleInputChange}
//                 className="border-b border-gray-300 focus:outline-none"
//               />
//             </div>
//           ) : (
//             <p className="text-gray-500 sm:text-2xl text-xl py-2">
//               Experience: {formData.experience} years
//             </p>
//           )}

//           {loading ? (
//             <Skeleton className="h-4 w-24" />
//           ) : (
//             <p className="text-yellow-500 text-xl">Rating: {formData.rating} ★</p>
//           )}
//         </div>
//       </div>

//       <div>
//         {loading ? (
//           <Skeleton className="h-20 w-full sm:w-96 mt-4" />
//         ) : isEditing ? (
//           <div className="grid ml-4 mt-4">
//             <label htmlFor="" className="font-semibold">Edit About</label>
//             <textarea
//               type="text"
//               name="about"
//               placeholder="About"
//               value={formData.about}
//               onChange={handleInputChange}
//               className="border-b border-gray-300 focus:outline-none resize-none w-96"
//             />
//           </div>
//         ) : (
//           <p className="text-lg text-black sm:ml-16 ml-4 mt-4">
//             <span className="sm:text-2xl text-lg font-semibold">About Me</span>
//             <br />
//             {formData.about}
//           </p>
//         )}
//       </div>

//       {loading ? (
//         <Skeleton className="h-10 w-32 mt-4 sm:ml-16 ml-4" />
//       ) : isEditing ? (
//         <div className="mt-4">
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded"
//             onClick={() => setIsEditing(false)}
//           >
//             Cancel
//           </button>
//         </div>
//       ) : (
//         <button
//           className="mt-4 sm:ml-16 ml-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => setIsEditing(true)}
//         >
//           Edit Profile
//         </button>
//       )}
//     </div>
//   );
// };


// export default Profile


// Profile.js
import React from "react";
import { useAuth } from "../../context/AuthContext"; 

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div className="py-40">Please log in to view your profile.</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen py-40">
      <h1 className="text-2xl">Welcome, {user.phone }!</h1>
      {/* Additional user info can be displayed here */}
    </div>
  );
};

export default Profile;
