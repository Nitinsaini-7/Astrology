// src/JanamKundaliForm.js
import React, { useState } from "react";

const JanamKundaliForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    place: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mx-4">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-[rgba(0,_0,_0,_0.2)_0px_0px_60px] rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Janam Kundali Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-lg font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="time" className="text-lg font-semibold mb-2">
                Time of Birth
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="place" className="text-lg font-semibold mb-2">
                Place of Birth
              </label>
              <input
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="gender" className="text-lg font-semibold mb-2">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JanamKundaliForm;
