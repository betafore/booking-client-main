import React from "react";
import { useRouter } from "next/navigation";
import { FaMapLocation, FaMoneyBill } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";

const DashboardNavigation = ({ name }: { name: string }) => {
  const router = useRouter();

  return (
    <nav className="p-5 border-b-2">
      <ul className="flex items-center flex-wrap gap-2 w-fit rounded-lg">
        <li className="">
          <button
            className={`font-medium items-center flex justify-between px-5 py-2 border-[1px] rounded-lg ${
              name === "package"
                ? "bg-cyan-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => router.push("/admin?name=package")}
          >
            <FiPackage size={18} className="mr-1" />
            Package
          </button>
        </li>

        <li className="">
          <button
            className={`font-medium items-center flex justify-between px-5 py-2 border-[1px] rounded-lg ${
              name === "location"
                ? "bg-cyan-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => router.push("/admin?name=location")}
          >
            <FaMapLocation size={18} className="mr-1" />
            Location
          </button>
        </li>
        <li className="">
          <button
            className={`font-medium items-center flex justify-between px-5 py-2 border-[1px] rounded-lg ${
              name === "guest"
                ? "bg-cyan-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => router.push("/admin?name=guest")}
          >
            <IoIosPeople size={18} className="mr-1" />
            Guest
          </button>
        </li>
        <li className="">
          <button
            className={`font-medium items-center flex justify-between px-5 py-2 border-[1px] rounded-lg ${
              name === "price"
                ? "bg-cyan-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => router.push("/admin?name=price")}
          >
            <FaMoneyBill size={18} className="mr-1" />
            Price
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavigation;
