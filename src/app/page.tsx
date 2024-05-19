"use client";
import Collapsed from "@/components/ToCollapsed";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import PackageDescription from "@/components/PackageDescription";
import TourOptions from "@/components/TourOptions";

import { Card } from "@/components/ui/card";
import { IPackage } from "@/type";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const days = ["Friday", "Saturday"];
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />

      <TourOptions />
    </Suspense>
  );
}
