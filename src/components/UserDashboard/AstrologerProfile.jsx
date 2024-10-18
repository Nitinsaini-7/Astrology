import { useState, useRef, useEffect } from "react";
import DefaultImage from "/user.png";
import EditIcon from "/edit.png";
import UploadingAnimation from "/uploading.gif";

const AstrologerProfile = ({ profile, onSave }) => {
  // Load profile data from localStorage, or fall back to the passed-in profile
  const [formData, setFormData] = useState(() => {
    const savedProfile = localStorage.getItem("astrologerProfile");
    return savedProfile ? JSON.parse(savedProfile) : profile;
  });

  // Load avatar URL from localStorage, fallback to DefaultImage
  const [avatarURL, setAvatarURL] = useState(() => {
    const savedAvatarURL = localStorage.getItem("astrologerAvatar");
    return savedAvatarURL || DefaultImage;
  });

  const [isEditing, setIsEditing] = useState(false);
  const fileUploadRef = useRef();

  // Sync formData with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("astrologerProfile", JSON.stringify(formData));
  }, [formData]);

  // Sync avatarURL with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("astrologerAvatar", avatarURL);
  }, [avatarURL]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      setAvatarURL(UploadingAnimation); // Show uploading animation while uploading
      const uploadedFile = fileUploadRef.current.files[0];
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
        setAvatarURL(data?.location); // Set new avatar URL
      }
    } catch (error) {
      console.error(error);
      setAvatarURL(DefaultImage); // Fallback to default image in case of error
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="sm:flex items-center space-x-4">
        <div className="relative h-60 w-60 sm:m-10 m-auto">
          <div className="bg-gray-200 rounded-full">
            <img
              src={avatarURL}
              alt="Avatar"
              className="sm:h-60 sm:w-60 rounded-full border-2 border-yellow-500"
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
        <div className="mt-10">
          {isEditing ? (
            <div className="grid mb-5">
              <label htmlFor="" className="font-semibold">Edit Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border-b mr-5 border-gray-300 text-gray-500 focus:outline-none"
              />
            </div>
          ) : (
            <p className="sm:text-5xl text-2xl font-semibold">{formData.name}</p>
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
            <p className="text-gray-500 sm:text-2xl text-xl py-2">
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
          <div className="grid ml-4 mt-4">
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
          <p className="text-lg text-black sm:ml-16 ml-4 mt-4">
            <span className="sm:text-2xl text-lg font-semibold">About Me</span>
            <br />
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
          className="mt-4 sm:ml-16 ml-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default AstrologerProfile;
