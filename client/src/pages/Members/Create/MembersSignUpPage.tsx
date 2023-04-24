import React from "react";
import MembersSignUpForm from "./MembersSignUpForm";

function MembersSignUpPage() {
  return (
    <>
      <div className="bg-white bg-opacity-50 p-4 rounded-lg">
        <h1 className="py-10 font-bold flex justify-center">
          New Member Sign Up
        </h1>
        <MembersSignUpForm />
      </div>
    </>
  );
}

export default MembersSignUpPage;
