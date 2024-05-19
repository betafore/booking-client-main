"use client";
import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="container">
        <div className="row justify-center items-center mt-20">
          <div className="sm:col-5 col-12 shadow">
            <div className="p-8">
              <h1 className="text-3xl mb-2 font-bold">Login Here</h1>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
