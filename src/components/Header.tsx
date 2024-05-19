"use client";
import React from "react";
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import { useGetUserDetailsQuery } from "@/redux/authApiSlice";

function Header() {
  // automatically authenticate user if token is found

  return (
    <>
      <TopNav />
      <Navbar />
    </>
  );
}

export default Header;
