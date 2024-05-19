import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";
import GuestForm from "./GuestForm";
import { useGetGuestQuery } from "@/redux/features/guest/guestApiSlice";
import { IPackage } from "@/type";

// Edit Modal
const EditButtonWithModal = ({ item }: { item: any }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-2 py-1 h-fit text-xs bg-cyan-400 hover:bg-cyan-500">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl border-b pb-2 mb-4">
            Edit - {item.name}
          </DialogTitle>

          {/* form */}
          <GuestForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

// Delete Modal
const DeleteButtonWithModal = ({ item }: { item: any }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-2 py-1 h-fit text-xs bg-red-400">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl border-b pb-2 mb-4">
            Delete - {item.name} ?
          </DialogTitle>

          {/* Delete Modal Content */}
          <div className="flex gap-5">
            <Button className="bg-red-400 hover:bg-red-500">Confirm</Button>
            <Button className="bg-cyan-400 hover:bg-cyan-500">Cancel</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const GuestList = () => {
  const { data: result } = useGetGuestQuery("") as any;
  const guests = result?.data;
  return (
    <div className="md:w-1/2">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <span className="text-lg mr-1">+</span>Add Guest
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl border-b pb-2 mb-4">
              Add New Guest
            </DialogTitle>
            <GuestForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Guest List</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" font-bold">S/N</TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>

          {guests?.length ? (
            <TableBody>
              {guests?.map((item: IPackage, i: number) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell className="text-right space-x-1 flex items-center justify-end">
                    <EditButtonWithModal item={item} />
                    <DeleteButtonWithModal item={item} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <p className="text-lg font-medium text-gray-500">
              No guest added yet
            </p>
          )}
        </Table>
      </div>
    </div>
  );
};

export default GuestList;
