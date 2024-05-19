"use client";

import AdminPage from "@/components/Packages/AdminPage";
import { useGetUserDetailsQuery } from "@/redux/authApiSlice";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

const Admin = () => {
  const { push } = useRouter();
  const { data, isLoading, error } = useGetUserDetailsQuery() as any;
  // if (error?.status === 401) {
  //   push("/login");
  // }

  // TODO: Uncomment the following before pushing the code if the code is commented.
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // if (!token) {
    //   push("/login");
    // } else if (data) {
    //   if (data?.data?.role !== "super_admin") {
    //     push("/login");
    //   }
    // }
  }, [error, data, push]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Suspense>
      <AdminPage />
    </Suspense>
  );
};

export default Admin;
