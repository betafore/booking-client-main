"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetPackageQuery } from "@/redux/features/package/packageApiSlice";
import { IPackage, ISubPackage } from "@/type";

const TourOptions = () => {
  const [selectedPackage, setSelectedPackage] = useState<IPackage>();

  const { data: result } = useGetPackageQuery("") as any;
  const { data: packages } = result! || [];

  const PackageImages = [
    "https://shuttletomoraine.com/wp-content/uploads/2024/05/Card-01.jpg",

    "https://shuttletomoraine.com/wp-content/uploads/2024/05/2.webp",

    "https://shuttletomoraine.com/wp-content/uploads/2024/05/3.webp",

    "	https://shuttletomoraine.com/wp-content/uploads/2024/05/4.webp",
    "https://shuttletomoraine.com/wp-content/uploads/2024/05/Card-01.jpg",
  ];

  const packageOptions = [
    {
      title: "Shuttle Service Banff to Lake Louise & Moraine",
      description:
        "Sunrise & Sunset Shuttle from Banff to Lake Moraine, Lake Louise.",
      image:
        "https://shuttletomoraine.com/wp-content/uploads/2024/05/Card-01.jpg",
      link: "/single",
    },
    {
      title: "Afternoon Shuttle",
      description:
        "Sunrise & Sunset Shuttle from Banff to Lake Moraine, Lake Louise.",
      image: "	https://shuttletomoraine.com/wp-content/uploads/2024/05/4.webp",
      link: "/single",
    },
  ];

  return (
    <Dialog>
      <div className="relative py-2 lg:py-10 flex justify-center">
        <div className="bg-cover w-full flex justify-center items-center max-w-screen-xl">
          <div className="w-full bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg py-10 space-y-5">
              <h1 className="font-newake text-3xl leading-tight sm:text-4xl max-md:text-center md:text-5xl xl:text-6xl font-bold text-gray-900 px-5">
                All Packages
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center px-2 mx-auto">
                {/* Tour Packages */}
                {packages?.map((tourPackage: IPackage, index: number) => (
                  <div
                    key={tourPackage?.id}
                    className="relative w-72 h-96 border-[1px] rounded-lg overflow-hidden flex flex-col justify-end"
                  >
                    {/* Image Container */}
                    <div className="w-full h-full absolute">
                      <Image
                        src={PackageImages[index]}
                        width={330}
                        height={410}
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>

                    {/* Text Container */}
                    <div className="p-5">
                      <div className="group relative z-10 bg-white/75 w-full p-4 flex gap-3 rounded-lg overflow-hidden transition-all">
                        {/* Text Container */}
                        <div className="flex flex-col gap-3">
                          <div className="h-1 w-12 bg-cyan-400 rounded-lg" />
                          <h1 className="font-newake text-3xl font-extrabold text-gray-800 text-left">
                            {tourPackage?.name}
                          </h1>
                          <p className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                            {tourPackage?.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-20 flex mt-3 justify-center">
                        {/* If tourOption has child, it will open modal. If not, it will navigate to the item dedicated page */}
                        {tourPackage?.child_packages?.length! > 0 ? (
                          <Button
                            asChild
                            className="middle none bg-cyan-400 center mr-3 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-cyan-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                            onClick={() => setSelectedPackage(tourPackage)}
                          >
                            <DialogTrigger>Book Now</DialogTrigger>
                          </Button>
                        ) : (
                          <Link
                            href={`/package/${tourPackage?.id}`}
                            className="middle none bg-cyan-400 center mr-3 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-cyan-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Book Now
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {/* Repeat the structure for other tour options */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DialogContent className="min-w-fit max-h-screen overflow-y-auto md:p-10">
        <DialogHeader>
          <DialogTitle className="mb-5">
            Choose your desired package.
          </DialogTitle>
          <div>
            {/* Package Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center px-2 mx-auto md:p-5">
              {selectedPackage?.child_packages?.map(
                (packageOption: ISubPackage, index: number) => (
                  <div
                    key={packageOption?.id}
                    className="relative w-72 h-96 border-[1px] rounded-lg overflow-hidden flex flex-col justify-end"
                  >
                    {/* Image Container */}
                    <div className="w-full h-full absolute">
                      <Image
                        src={PackageImages[index]}
                        width={330}
                        height={410}
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>

                    {/* Text Container */}
                    <div className="p-5">
                      <div className="relative z-10 bg-white/75 w-full p-4 flex gap-3 rounded-lg overflow-hidden transition-all">
                        {/* Text Container */}
                        <div className="flex flex-col gap-3">
                          <div className="h-1 w-12 bg-cyan-400 rounded-lg" />
                          <h1 className="font-newake text-3xl font-extrabold text-gray-800 text-left">
                            {packageOption?.name}
                          </h1>
                        </div>
                      </div>

                      <div className="relative z-20 flex mt-3 justify-center">
                        {/* If tourOption has child, it will open modal. If not, it will navigate to the item dedicated page */}

                        <Link
                          href={`/package/${selectedPackage?.id}?sub_package=${packageOption?.name}`}
                          className="middle none bg-cyan-400 center mr-3 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-cyan-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TourOptions;
