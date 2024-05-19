import BannerSection from "@/components/BannerSection";
import Calendars from "@/components/Calender";
import PackageDescription from "@/components/PackageDescription";
import TourOptions from "@/components/TourOptions";
import { getListPage } from "@/lib/contentParser";
import { IPackage } from "@/type";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/package`).then(
    (res) => res.json()
  );

  return posts.data?.map((post: IPackage) => ({
    slug: post.id,
  }));
}

const fetchProducts = async (id: string) => {
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/package/${id}`
  ).then((res) => res.json());
  return post;
};
export default async function Single({ params }: { params: any }) {
  const { slug } = params;
  const data = await fetchProducts(slug);
  const regularData = getListPage("packages/_index.md");

  // const data = regularData.filter(
  //   (page: RegularPage) => page.slug === params.regular
  // )[0];
  // const { frontmatter, content } = data;
  // const { title, meta_title, description, image } = frontmatter;
  // If data is not found, redirect to "Not Found" page
  if (!data) {
    notFound();
  }

  const filterData = regularData.frontmatter.packages.find(
    (item: any) => item.title.toLowerCase() === data?.data?.name.toLowerCase()
  );
  console.log(filterData);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Hero /> */}
      <BannerSection packages={data.data} packageData={filterData} />

      <PackageDescription
        packageName={data.data.name}
        packageData={filterData}
        regularData={regularData}
      >
        <Calendars packages={data.data} />
      </PackageDescription>

      <TourOptions />
    </Suspense>
  );
}
