import React from "react";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import AdminNavbar from "./AdminNavbar";

const Astrologer = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      profileImg: "https://via.placeholder.com/50", // Sample image URL
      name: "Aanchal",
      contactNo: "Hidden In Demo",
      email: "Hidden In Demo",
      gender: "Male",
      totalRequest: "0/0",
      status: false, // false = Unverified, true = Verified
    },
    // Additional profiles can be added here if needed
  ]);

  // Handle status toggle between Verified and Unverified
  const handleToggleStatus = (id) => {
    setProfiles((prevState) =>
      prevState.map((profile) =>
        profile.id === id ? { ...profile, status: !profile.status } : profile
      )
    );
  };

  return (
    <div>
      <AdminNavbar />

      <div className="mt-20 sm:p-10 p-4">
        <h1>Astrologer</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">PROFILE</th>
                <th className="py-2 px-4 border">NAME</th>
                <th className="py-2 px-4 border">CONTACT NO.</th>
                <th className="py-2 px-4 border">EMAIL</th>
                <th className="py-2 px-4 border">GENDER</th>
                <th className="py-2 px-4 border">TOTAL REQUEST</th>
                <th className="py-2 px-4 border">STATUS</th>
                <th className="py-2 px-4 border">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile, index) => (
                <tr key={profile.id}>
                  <td className="py-2 px-4 border text-center">{index + 1}</td>
                  <td className="py-2 px-4 border text-center">
                    <img
                      src={profile.profileImg}
                      alt={profile.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {profile.name}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {profile.contactNo}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {profile.email}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {profile.gender}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {profile.totalRequest}
                  </td>
                  <td className="py-2 px-4 border text-center sm:flex items-center justify-center gap-2">
                    {profile.status ? "Verified" : "Unverified"}
                    <Toggle
                      defaultChecked={profile.status}
                      onChange={() => handleToggleStatus(profile.id)}
                    />
                  </td>
                  <td className="py-2 px-4 border text-center">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-green-500 text-white px-2 py-1 rounded">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Astrologer;
