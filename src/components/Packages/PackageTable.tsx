"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetPackageQuery } from "@/redux/features/package/packageApiSlice";
import { IPackage } from "@/type";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import PackageAddForm from "./PackageAddForm";

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
          <PackageAddForm />
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
            Delete Package - {item.name} ?
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

const PackageTable = () => {
  const { data: result } = useGetPackageQuery("") as any;
  const { data: packages } = result! || [];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Packages List</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" font-bold">S/N</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Limit</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Child</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages?.map((item: IPackage, i: number) => (
            <TableRow key={item?.id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.limit}</TableCell>
              <TableCell className="text-right">{item?.price}</TableCell>
              <TableCell className="text-right">
                {item?.child_packages?.length}
              </TableCell>
              <TableCell className="text-right space-x-1 flex items-center justify-end">
                <EditButtonWithModal item={item} />
                <DeleteButtonWithModal item={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PackageTable;
