import React from "react";
import AdminSignInForm from "./AdminSignInForm";

interface AdminAuthPageProps {
  setUser: (decodedUser: any) => void;
}

function AdminAuthPage({ setUser }: AdminAuthPageProps) {
  return (
    <>
      <div className="">
        <h1 className="flex justify-center py-12 font-bold ">Admin Sign In</h1>
        <br />
        <AdminSignInForm setUser={setUser} />
      </div>
    </>
  );
}

export default AdminAuthPage;
