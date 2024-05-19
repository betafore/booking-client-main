import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import PickupLocationForm from "./PickupLocationForm";
import { useGetPickupLocationQuery } from "@/redux/features/location/locationApiSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

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
          <PickupLocationForm />
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

const PickupLocationList = () => {
  const { data: result } = useGetPickupLocationQuery("") as any;
  const locations = result?.data;
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <span className="text-lg mr-1">+</span>Add Location
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl border-b pb-2 mb-4">
              Add New Pickup Or Drop Location
            </DialogTitle>
            <PickupLocationForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold"> Location List </h3>
        {locations?.length ? (
          // <ul className="list-disc ml-4">
          //   {locations?.map((location: any) => (
          //     <li key={location.id} className="font-medium mb-2">
          //       {location.name}
          //     </li>
          //   ))}
          // </ul>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className=" font-bold">S/N</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Start Point</TableHead>
                <TableHead>End Point</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {locations?.map((item: any, i: number) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.start_point?.name}</TableCell>
                  <TableCell>{item?.end_point?.name}</TableCell>
                  <TableCell className="text-right space-x-1 flex items-center justify-end">
                    <EditButtonWithModal item={item} />
                    <DeleteButtonWithModal item={item} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-lg font-medium text-gray-500">
            No location added yet
          </p>
        )}
      </div>
    </div>
  );
};

export default PickupLocationList;
