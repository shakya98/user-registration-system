import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfileForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

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

        console.log(response.data.result);

        setUserInfo(response.data.result);

        // const [first, last] = response.data.result.name.split(" ");
        setFirstName(response.data.result.patient.first_name);
        setLastName(response.data.result.patient.last_name);
        setEmail(response.data.result.patient.email);
        setDateOfBirth(response.data.result.patient.dob);
        setGender(response.data.result.patient.gender);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const access_token = localStorage.getItem("access_token");

    try {
      const response = await axios.put(
        "https://mditest.elifeamerica.com/api/v1/profile",
        {
          first_name: firstName,
          last_name: lastName,
          dob: dateOfBirth,
          gender,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      window.location.href = "/confirm";
      console.log(response.data);
    } catch (error) {
      console.error("API error:", error);
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-color-2 login-main main-height-1">
      <div className="login-div">
        <h2 className="text-color-3 text-0 mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-1">
              <div className="form-outline mb-1">
                <label
                  className="form-label text-color-3 text-2 login-label"
                  htmlFor="firstName"
                >
                  First Name:
                </label>
                <input
                  className="form-control login-input"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="form-outline mb-1">
                <label
                  className="form-label text-color-3 text-2 login-label"
                  htmlFor="lastName"
                >
                  Last Name:
                </label>
                <input
                  className="form-control login-input"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="form-control login-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="dateOfBirth"
            >
              Date of Birth:
            </label>
            <input
              className="form-control login-input"
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="row">
            <label className="form-label text-color-3 text-2 login-label">
              Gender:
            </label>
          </div>
          <div>
            <div className="row radio-row">
              <div className="col-md-4 mb-1 radio-row-inner">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="col-md-4 mb-1 donate-now-inn">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="col-md-4 mb-1 donate-now-inn">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={() => setGender("other")}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <button className="btn btn-primary block mb-1 text-2" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
