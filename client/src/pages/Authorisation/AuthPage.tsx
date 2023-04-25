import React from "react";
import SignInForm from "./SignInForm";

interface AuthPageProps {
  setUser: (decodedUser: any) => void;
}

function AuthPage({ setUser }: AuthPageProps) {
  return (
    <>
      <div className="">
        <h1 className="flex justify-center py-12 font-bold ">Member Sign In</h1>
        <br />
        <SignInForm setUser={setUser} />
      </div>
    </>
  );
}

export default AuthPage;
