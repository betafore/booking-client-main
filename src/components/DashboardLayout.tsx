import React from "react";
import DashboardNavigation from "./DashboardNavigation";
const DashboardLayout = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col justify-center gap-5 my-5 w-full max-w-screen-xl">
        <DashboardNavigation name={name} />

        <div className="w-full max-w-screen-xl p-5">{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;
