"use client";
import Locations from "@/components/Locations/Locations";
import { useSearchParams } from "next/navigation";
import AdminPackage from "../../components/Packages/AdminPackage";
import GuestList from "../Guest/GuestList";
import PriceList from "../Price/PriceList";
import DashboardLayout from "../DashboardLayout";

const AdminPage = () => {
  const name = useSearchParams().get("name");

  return (
    <DashboardLayout name={name!}>
      {name === "package" ? (
        <AdminPackage />
      ) : name === "location" ? (
        <Locations />
      ) : name === "guest" ? (
        <GuestList />
      ) : name === "price" ? (
        <PriceList />
      ) : (
        <AdminPackage />
      )}
    </DashboardLayout>
  );
};

export default AdminPage;
