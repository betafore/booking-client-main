import { IPackage } from "@/type";
import Image from "next/image";

function HeroSection({ packages }: { packages: IPackage }) {
  const filterPackages = packages?.child_packages?.find(
    (item) => item.name === "Morning"
  );

  return (
    <section className="relative py-8 lg:pt-12 lg:pb-28 bg-white">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
            Amazing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
              {packages?.name}
            </span>{" "}
          </h1>
          <p className="mt-8 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            repellat perspiciatis aspernatur quis voluptatum porro incidunt,
            libero sequi quos eos velit
          </p>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jD9VUqXIl9eGvFFydoqjSCFvscAlAg6c1b9preS4rjrDjufMgzB_1ANqWfHOhAmwI6A&usqp=CAU"
            alt="Hero image"
            width={400}
            height={400}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
