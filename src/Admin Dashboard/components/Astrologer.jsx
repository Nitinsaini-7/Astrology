import React, { useEffect, useState } from "react";
import axios from 'axios';
import "react-toggle/style.css";

const Astrologer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://naunidh.shreeradhatechnology.com/naunidh/admin_all_data");
        const responseData = response.data.data || [];
        console.log(response);
        
        console.log(responseData);
        
        setData(Array.isArray(responseData) ? responseData : []);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Aadhar No</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Place</th>
              <th className="px-4 py-2">Experience</th>
              <th className="px-4 py-2">Profile Image</th>
              {/* Add more headers as needed based on the response data structure */}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.full_name || "N/A"}</td>
                <td className="px-4 py-2">{item.aadhar_no || "N/A"}</td>
                <td className="px-4 py-2">{item.email || "N/A"}</td>
                <td className="px-4 py-2">{item.phone || "N/A"}</td>
                <td className="px-4 py-2">{item.dob || "N/A"}</td>
                <td className="px-4 py-2">{item.place || "N/A"}</td>
                <td className="px-4 py-2">{item.experience || "N/A"}</td>
                <td className="px-4 py-2">
                  {item.profile_image ? (
                    <img src={item.profile_image} alt="Profile" className="h-10 w-10 rounded-full" />
                  ) : "N/A"}
                </td>
                {/* Add more cells as needed based on the response data structure */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Astrologer;
