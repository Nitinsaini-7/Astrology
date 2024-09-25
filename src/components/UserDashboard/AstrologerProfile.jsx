import { useState } from "react";
import DefaultImage from "/user.png";
import EditIcon from "/edit.png";
import UploadingAnimation from "/uploading.gif";
import { useRef } from "react";

const AstrologerProfile = ({ profile, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const [avatarURL, setAvatarURL] = useState(DefaultImage);

  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      setAvatarURL(UploadingAnimation);
      const uploadedFile = fileUploadRef.current.files[0];
      // const cachedURL = URL.createObjectURL(uploadedFile);
      // setAvatarURL(cachedURL);
      const formData = new FormData();
      formData.append("file", uploadedFile);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "post",
          body: formData,
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        setAvatarURL(data?.location);
      }
    } catch (error) {
      console.error(error);
      setAvatarURL(DefaultImage);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="flex items-center space-x-4">
        <div className="relative h-60 w-60 m-8">
          <div className="bg-gray-200 rounded-full">
            <img
              src={avatarURL}
              alt="Avatar"
              className="h-60 w-60 rounded-full border-2 border-yellow-500"
            />
          </div>

          <form id="form" encType="multipart/form-data">
            <button
              type="submit"
              onClick={handleImageUpload}
              className="flex-center absolute bg-yellow-500 p-2 bottom-12 right-0 h-9 w-9 rounded-full"
            >
              <img src={EditIcon} alt="Edit" className="object-cover" />
            </button>
            <input
              type="file"
              id="file"
              ref={fileUploadRef}
              onChange={uploadImageDisplay}
              hidden
            />
          </form>
        </div>
        <div className="">
          {isEditing ? (
            <div className="grid mb-5">
                <label htmlFor="" className="font-semibold">Edit Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-b mr-5 border-gray-300  text-gray-500 focus:outline-none"
                />
            </div>
          ) : (
            <p className="text-5xl font-semibold">{formData.name}</p>
          )}

          {isEditing ? (
              <div className="grid ">

                  <label htmlFor="" className="font-semibold">Edit Experience</label>
                  <input
                    type="number"
                    name="experience"
                    placeholder="Experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 focus:outline-none"
                  />
              </div>
          ) : (
            <p className="text-gray-500 text-2xl py-2">
              Experience: {formData.experience} years
            </p>
          )}
          <p className="text-yellow-500 text-xl ">
            Rating: {formData.rating} ★
          </p>
        </div>
      </div>

      <div>
      {isEditing ? (
           <div className="grid">
            <label htmlFor="" className="font-semibold">Edit About</label>
            <textarea
              type="text"
              name="about"
              placeholder="About"
              value={formData.about}
              onChange={handleInputChange}
              className="border-b border-gray-300 focus:outline-none resize-none w-96"
            />
           </div>
          ) : (
            <p className=" text-lg text-black">
              <span className="text-2xl font-semibold">About Me</span> <br />
              {formData.about}
            </p>
          )}
      </div>

      {isEditing ? (
        <div className="mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default AstrologerProfile;
