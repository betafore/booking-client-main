import React from "react";
import { useGetStartLocationQuery } from "@/redux/features/location/locationApiSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import StartLocationForm from "./StartLocationForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
          <StartLocationForm />
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

          {/* form */}
          <div className="flex gap-5">
            <Button className="bg-red-400 hover:bg-red-500">Confirm</Button>
            <Button className="bg-cyan-400 hover:bg-cyan-500">Cancel</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const StartPointList = () => {
  const { data } = useGetStartLocationQuery("") as any;
  const locations = data?.data;
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <span className="text-lg mr-1">+</span>Add Start Location
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl border-b pb-2 mb-4">
              Add Start Location
            </DialogTitle>
            <StartLocationForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* List */}

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Start Location List</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" font-bold">S/N</TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations?.map((item: any, i: number) => (
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
        </Table>
      </div>
    </div>
  );
};

export default StartPointList;
