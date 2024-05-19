"use client";
import { IPackage } from "@/type";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function BannerSection({ packages, packageData }: { packages: IPackage, packageData: any }) { 
  const searchParams = useSearchParams();
  const search = searchParams.get("sub_package");
  const filterPackages = packages?.child_packages?.find(
    (item: any) => item.name === search
  );

  return (
    <section className="relative py-8 lg:pt-12 lg:pb-28 bg-white">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col gap-5">
        <div>
          <h1 className="font-newake text-center text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
            Amazing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
              {filterPackages ? filterPackages.name : ""} {packages?.name}
            </span>{" "}
          </h1>
          <p className="mt-8 text-gray-700 text-center">
            {packages.description}
          </p>
        </div>
        <div className="relative w-full h-auto overflow-hidden rounded-lg">
          {search ? (
            <>
              <Image
                src={
                  search === "Morning Shuttle"
                    ? packageData?.morning_cover_photo
                    : packageData?.afternoon_cover_photo
                }
                alt="Hero image"
                width={1280}
                height={500}
              />
            </>
          ) : (
            <>
              <Image
                src={packageData?.cover_photo}
                alt="Hero image"
                width={1280}
                height={500}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
