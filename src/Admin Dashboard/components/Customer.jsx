import React from "react";
import AdminNavbar from "./AdminNavbar";

const Customer = () => {
  const tableData = [
    {
      id: 1,
      profile: "https://via.placeholder.com/40", // Placeholder image for profile
      name: "John Doe",
      contact: "123-456-7890",
      email: "johndoe@example.com",
      birthDate: "1990-01-01",
      birthTime: "10:00 AM",
    },
    {
      id: 2,
      profile: "https://via.placeholder.com/40",
      name: "Jane Smith",
      contact: "987-654-3210",
      email: "janesmith@example.com",
      birthDate: "1985-05-05",
      birthTime: "12:00 PM",
    },
  ];

  return (
    <div>
      <AdminNavbar />

      <div className="mt-20 sm:p-10 p-4">
        <h1>Customer</h1>

        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Profile</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Contact No.</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Birth Date</th>
                  <th className="py-3 px-6 text-left">Birth Time</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {tableData.map((data, index) => (
                  <tr
                    key={data.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="py-3 px-6 text-left">
                      <img
                        src={data.profile}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="py-3 px-6 text-left">{data.name}</td>
                    <td className="py-3 px-6 text-left">{data.contact}</td>
                    <td className="py-3 px-6 text-left">{data.email}</td>
                    <td className="py-3 px-6 text-left">{data.birthDate}</td>
                    <td className="py-3 px-6 text-left">{data.birthTime}</td>
                    <td className="py-3 px-6 text-left">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-4 py-1 ml-2 rounded-md hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
