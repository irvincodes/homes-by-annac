import jwt_decode from "jwt-decode";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SignInFormProps {
  setUser: (decodedUser: any) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ setUser }) => {
  const [loginAttempt, setLoginAttempt] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit fired!");
    try {
      const response = await fetch("/api/members/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginAttempt),
      });
      const data = await response.json();
      console.log("data: ", data);
      localStorage.setItem("token", data);
      const decodedUser = jwt_decode(data);
      console.log("decodedUser: ", decodedUser);
      setUser(decodedUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginAttempt({
      ...loginAttempt,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <label className="font-semibold">E-mail: </label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="e.g homefinder@gmail.com"
            value={loginAttempt.email}
            onChange={handleChange}
            className="mb-4 w-80 bg-zinc-100 p-2 border-2 rounded mt-1 placeholder:italic text-center"
          ></input>
          <br />
          <label className="font-semibold">Password: </label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="your password"
            value={loginAttempt.password}
            onChange={handleChange}
            className="mb-4 w-80 bg-zinc-100 p-2 border-2 rounded mt-1 placeholder:italic text-center"
          ></input>
          <br />
          <div className="flex justify-center">
            <button className="font-semibold rounded-xl bg-pink-200 px-4 py-2 my-4 hover:bg-pink-400">
              Sign In
            </button>
          </div>
          <div className="flex justify-center">
            Don't have an account yet? Click&nbsp;
            <Link
              className=" font-semibold underline hover:text-blue-600"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
