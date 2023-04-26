import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MembersSignUpForm() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [updateStatus, setUpdateStatus] = useState("");

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log("updated member: ", member);
  };

  const createMember = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });
    if (response.ok) {
      setUpdateStatus(
        "Member account successfully created, proceed to sign in."
      );
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={createMember}>
          <label className="font-semibold">Name: </label>
          <br />
          <input
            name="name"
            value={member.name}
            onChange={handleChange}
            required
            className="mb-4 w-80 bg-zinc-100 p-2 border-2 rounded mt-1"
          ></input>
          <br />
          <label className="font-semibold">E-mail: </label>
          <br />
          <input
            name="email"
            type="email"
            value={member.email}
            onChange={handleChange}
            required
            className="mb-4 w-80 bg-zinc-100 p-2 border-2 rounded mt-1"
          ></input>
          <br />
          <label className="font-semibold">Password: </label>
          <br />
          <input
            name="password"
            type="password"
            value={member.password}
            onChange={handleChange}
            required
            className="mb-4 w-80 bg-zinc-100 p-2 border-2 rounded mt-1"
          ></input>
          <br />
          <div className="flex justify-center">
            <button className="font-semibold rounded-xl bg-pink-200 px-4 py-2 my-4 hover:bg-pink-400">
              Create Account
            </button>
          </div>
          <div className="flex justify-center">
            Already have an account? Click&nbsp;
            <Link
              className=" font-semibold underline hover:text-blue-600"
              to="/login"
            >
              Sign In
            </Link>
          </div>
          {updateStatus && (
            <p className=" mt-4 text-sm italic text-green-500">
              {updateStatus}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default MembersSignUpForm;
