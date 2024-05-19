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
import PriceAddForm from "./PriceAddForm";
import { useGetPriceQuery } from "@/redux/features/price/priceApiSlice";
import EndLocationForm from "../Locations/EndLocationForm";

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
          <PriceAddForm />
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

const PriceList = () => {
  const { data: result } = useGetPriceQuery("") as any;
  const prices = result?.data;
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <span className="text-lg mr-1">+</span>Add Price
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl border-b pb-2 mb-4">
              Add New Price
            </DialogTitle>
            <PriceAddForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Price List </h3>
        {prices?.length ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className=" font-bold">sr.</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Start Point</TableHead>
                <TableHead>End Point</TableHead>
                <TableHead className="text-right">Guest</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prices?.map((item: any, i: number) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{item?.package?.name}</TableCell>
                  <TableCell>{item?.start_point?.name}</TableCell>
                  <TableCell>{item?.end_point?.name}</TableCell>
                  <TableCell className="text-right">
                    {item?.guest?.name}
                  </TableCell>
                  <TableCell className="text-right">{item?.price}</TableCell>
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
            No price added yet
          </p>
        )}
      </div>
    </div>
  );
};

export default PriceList;
