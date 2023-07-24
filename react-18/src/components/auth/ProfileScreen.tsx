import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface ProfileScreenProps {
  setUserInfo: React.Dispatch<React.SetStateAction<any>>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ setUserInfo }) => {
  const [userInfo, setUserInfoState] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const access_token = localStorage.getItem("access_token");

      try {
        const response = await axios.get(
          "https://mditest.elifeamerica.com/api/v1/auth/user",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        setUserInfo(response.data.result);
        setUserInfoState(response.data.result)
        console.log(response.data.result);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("profile_image", selectedImage);

      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.post(
          "https://mditest.elifeamerica.com/api/v1/profile/avatar",
          formData,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Image upload successful");
        console.log(response.data);
        setUserInfo(response.data.result);
        setUserInfoState(response.data.result);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {userInfo.patient && userInfo.patient.profile_image && (
          <img src={userInfo.patient.profile_image.resource} alt="User" />
        )}
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <button onClick={handleImageUpload}>Change Image</button>
      </div>
      <div>
        <h2>Welcome</h2>
        <h3>{userInfo.patient.name}</h3>
      </div>
      <div>
        <p>Email: {userInfo.patient.email}</p>
        <p>Name: {userInfo.patient.name}</p>
        <p>Gender: {userInfo.patient.gender}</p>
        <p>Date of Birth: {userInfo.patient.dob}</p>
      </div>
    </div>
  );
};

export default ProfileScreen;
