"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IPackage } from "@/type";
import { useRouter } from "next/navigation";

const PackageCard = ({ item }: { item: IPackage }) => {
  const router = useRouter();
  return (
    <Card className="w-[350px]" key={item?.id}>
      <CardHeader>
        <CardTitle>{item?.name}</CardTitle>
        <CardDescription>{item?.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {!item?.child_packages!.length ? (
          <Button
            variant="default"
            className="w-full font-bold text-lg"
            onClick={() => router.push(`/?name=${item?.name}&id=${item?.id}`)}>
            Book Now
          </Button>
        ) : (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="default" className="w-full font-bold text-lg">
                Book Now
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[800px]">
              <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                {item?.child_packages!.map((child: any) => (
                  <Card className="w-[350px]" key={child?.id}>
                    <CardHeader>
                      <CardTitle>{child?.name}</CardTitle>
                      {/* <CardDescription>{item?.description}</CardDescription> */}
                    </CardHeader>

                    <CardFooter>
                      {" "}
                      <AlertDialogCancel asChild>
                        <Button
                          variant="default"
                          className="w-full font-bold text-lg bg-black"
                          onClick={() =>
                            router.push(
                              `/?parent=${item?.name}&name=${child?.name}&id=${child?.id}`
                            )
                          }>
                          Book Now
                        </Button>
                      </AlertDialogCancel>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
