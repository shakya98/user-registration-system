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
      console.log(response.data)
    } catch (error) {
      console.error("API error:", error);
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={() => setGender("female")}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={() => setGender("other")}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfileForm;
