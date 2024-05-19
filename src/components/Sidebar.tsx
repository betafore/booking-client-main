import { useRouter } from "next/navigation";
import { FaManatSign, FaMapLocation, FaMoneyBill } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Function;
}) => {
  const router = useRouter();
  return (
    <aside
      className={`w-[300px] bg-[#f5f5dc] transition-all duration-500 -left-[300px] md:left-0 absolute border-r h-screen md:py-5 md:px-10 ${
        sidebarOpen ? "left-0 py-5 px-10 z-10" : "-left-[300px] py-5 px-10"
      }`}>
      <div className="flex  justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Admin </h1>
        <button
          className="md:hidden "
          onClick={() => setSidebarOpen(!sidebarOpen)}>
          <IoCloseSharp size={24} />
        </button>
      </div>
      <ul>
        <li className="mb-4">
          <button
            className="text-lg font-medium items-center flex justify-between"
            onClick={() => router.push("/admin?name=package")}>
            <FiPackage size={18} className="mr-2" />
            Package
          </button>
        </li>

        <li className="mb-4">
          <button
            className="text-lg font-medium items-center flex justify-between"
            onClick={() => router.push("/admin?name=location")}>
            <FaMapLocation size={18} className="mr-2" />
            Location
          </button>
        </li>
        <li className="mb-4">
          <button
            className="text-lg font-medium items-center flex justify-between"
            onClick={() => router.push("/admin?name=guest")}>
            <IoIosPeople size={18} className="mr-2" />
            Guest
          </button>
        </li>
        <li>
          <button
            className="text-lg font-medium items-center flex justify-between"
            onClick={() => router.push("/admin?name=price")}>
            <FaMoneyBill size={18} className="mr-2" />
            Price
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
