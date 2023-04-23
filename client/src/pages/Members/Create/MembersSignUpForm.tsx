import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MembersSignUpForm() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log("updated member: ", member);
  };

  const createUser = async () => {
    const response = await fetch("/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });
    if (response.ok) {
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        <form>
          <label className="font-semibold">Name: </label>
          <br />
          <input
            name="name"
            value={member.name}
            onChange={handleChange}
            required
          ></input>
          <br />
          <label className="font-semibold">E-mail: </label>
          <br />
          <input
            name="email"
            value={member.email}
            onChange={handleChange}
            required
          ></input>
          <label className="font-semibold">Password: </label>
          <br />
          <input
            name="password"
            value={member.password}
            onChange={handleChange}
            required
          ></input>
        </form>
      </div>
    </>
  );
}

export default MembersSignUpForm;
