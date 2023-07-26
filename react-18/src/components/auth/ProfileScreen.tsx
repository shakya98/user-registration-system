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
        setUserInfoState(response.data.result);
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
    <div className="bg-color-2 login-main main-height-1">
      <div className="login-div">
        <div className="bg-color-2">
          <div className="row mb-4">
            <div className="col-md-6 mb-1">
              {userInfo.patient && userInfo.patient.profile_image && (
                <img
                  width="200rem"
                  height="200rem"
                  src={userInfo.patient.profile_image.resource}
                  alt="User"
                />
              )}
              <input
                className="form-control"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
              />
              <button className="form-control bg-color-1 text-color-5" onClick={handleImageUpload}>Change Image</button>
            </div>
            <div className="col-md-6 mb-1 align-btm">
              <h2 className="text-color-3 text-0 login-headings">Welcome</h2>
              <h3 className="text-color-1 text-1 login-headings">
                {userInfo.patient.name}
              </h3>
            </div>
          </div>
          <div>
            <div className="row">
              <p className="text-color-3 text-2 col-md-6 mb-1 login-headings">
                Email:
              </p>{" "}
              <p className="text-color-1 text-2 col-md-6 mb-1 right-align">
                {" "}
                {userInfo.patient.email}
              </p>
            </div>
            <div className="row">
              <p className="text-color-3 text-2 col-md-6 mb-1 login-headings">
                Name:
              </p>{" "}
              <p className="text-color-1 text-2 col-md-6 mb-1 right-align">
                {" "}
                {userInfo.patient.name}
              </p>
            </div>
            <div className="row">
              <p className="text-color-3 text-2 col-md-6 mb-1 login-headings">
                Gender:
              </p>{" "}
              <p className="text-color-1 text-2 col-md-6 mb-1 right-align">
                {" "}
                {userInfo.patient.gender}
              </p>
            </div>
            <div className="row">
              <p className="text-color-3 text-2 col-md-6 mb-1 login-headings">
                Date of Birth:
              </p>{" "}
              <p className="text-color-1 text-2 col-md-6 mb-1 right-align">
                {" "}
                {userInfo.patient.dob}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
