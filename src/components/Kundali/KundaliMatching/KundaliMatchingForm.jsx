// src/components/ AstrologyForm.js

import React, { useState } from "react";

const KundaliMatchingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can handle form submission here, e.g., send data to an API
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_60px] w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Astrology Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name1" className="text-lg font-semibold ">Partner 1 Name</label>
            <input
              type="text"
              id="name1"
              name="name1"
              value={formData.name1}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthDate1" className="text-lg font-semibold ">Partner 1 Birth Date</label>
            <input
              type="date"
              id="birthDate1"
              name="birthDate1"
              value={formData.birthDate1}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthTime1" className="text-lg font-semibold ">Partner 1 Birth Time</label>
            <input
              type="time"
              id="birthTime1"
              name="birthTime1"
              value={formData.birthTime1}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthplace1" className="text-lg font-semibold ">Partner 1 Birth Place</label>
            <input
              type="text"
              id="birthplace1"
              name="birthplace1"
              value={formData.birthplace1}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name2" className="text-lg font-semibold ">Partner 2 Name</label>
            <input
              type="text"
              id="name2"
              name="name2"
              value={formData.name2}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthDate2" className="text-lg font-semibold ">Partner 2 Birth Date</label>
            <input
              type="date"
              id="birthDate2"
              name="birthDate2"
              value={formData.birthDate2}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthTime2" className="text-lg font-semibold ">Partner 2 Birth Time</label>
            <input
              type="time"
              id="birthTime2"
              name="birthTime2"
              value={formData.birthTime2}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthplace2" className="text-lg font-semibold ">Partner 2 Birth Place</label>
            <input
              type="text"
              id="birthplace2"
              name="birthplace2"
              value={formData.birthplace2}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Get Free Kundali Matching Report
        </button>
      </form>
      </div>
    </div>
  );
};

export default KundaliMatchingForm;
