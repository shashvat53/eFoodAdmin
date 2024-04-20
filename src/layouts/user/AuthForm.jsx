import React from "react";
import SignInForm from "./SignInFrom";
import ImageSection from "./ImageSection";

const AuthForm = () => {
  return (
    <div className="flex w-full h-screen bg-white overflow-hidden">
      <div className="">
        <ImageSection />
      </div>
      <SignInForm />
    </div>
  );
};

export default AuthForm;
