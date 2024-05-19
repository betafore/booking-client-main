import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="border-b-2 shadow-md border-gray-100 py-0.5 bg-cyan-400">
      <div className="max-w-screen-xl mx-auto sm:px-6">
        <div className="flex flex-col-reverse md:flex-row min-w-full justify-center md:justify-between md:items-center md:space-x-10 pt-1 pb-1">
          <nav className="flex-col flex-grow hidden pb-0 md:pb-0 md:flex md:justify-start md:flex-row">
            <Link
              className="flex items-center text-sm hover:text-gray-500 text-white"
              href="tel:+15878973374"
            >
              <LuPhoneCall className="mr-1" />
              <span>Call +1 587 897 3374</span>
            </Link>
            <Link
              className="flex items-center text-sm hover:text-gray-500 ml-3 text-white"
              href="https://wa.me/+15878973374"
            >
              <FaWhatsapp className="mr-1 text-lg" />
              <span>WhatsApp: (+1) 587 897 3374</span>
            </Link>
          </nav>

          <div className="flex justify-around items-center">
            <div className="flex justify-end items-center">
              <div className="flex whitespace-nowrap mx-3 justify-center space-x-4 items-center">
                <Link
                  className="flex items-center text-sm hover:text-gray-500 text-white"
                  href="mailto:info@shuttletomoraine.com"
                >
                  <MdOutlineEmail className="mr-1 text-lg" />
                  <span>Email: info@shuttletomoraine.com</span>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61559369790810"
                  className=" hover:text-gray-500 text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook />
                </Link>
                <Link href="#" className=" hover:text-gray-500 text-white">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram />
                </Link>
                {/* <Link href="#" className=" hover:text-gray-500 text-white">
                  <span className="sr-only">Twitter</span>
                  <FaXTwitter />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
