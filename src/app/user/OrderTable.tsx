import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IPackage } from "@/type";

const orders = [
  {
    order_id: "aaaaaa",
    date: "2024-05-15",
    start: "2024-05-15",
    end: "2024-05-17",
    package: "Shuttle",
    sub_package: "Morning",
    total_guest: 5,
    total_amount: 5,
  },
  {
    order_id: "aaaaaa",
    date: "2024-05-15",
    start: "2024-05-15",
    end: "2024-05-17",
    package: "Shuttle",
    sub_package: "Morning",
    total_guest: 5,
    total_amount: 5,
  },
  {
    order_id: "aaaaaa",
    date: "2024-05-15",
    start: "2024-05-15",
    end: "2024-05-17",
    package: "Shuttle",
    sub_package: "Morning",
    total_guest: 5,
    total_amount: 5,
  },
  {
    order_id: "aaaaaa",
    date: "2024-05-15",
    start: "2024-05-15",
    end: "2024-05-17",
    package: "Shuttle",
    sub_package: "Morning",
    total_guest: 5,
    total_amount: 5,
  },
];

const OrderTable = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">John Doe</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" font-bold">S/N</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Start</TableHead>
            <TableHead className="text-right">End</TableHead>
            <TableHead className="text-right">Package</TableHead>
            <TableHead className="text-right">Sub-Package</TableHead>
            <TableHead className="text-right">Total Guest</TableHead>
            <TableHead className="text-right">Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((item: any, i: number) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{item?.order_id}</TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>{item?.start}</TableCell>
              <TableCell>{item?.end}</TableCell>
              <TableCell>{item?.package}</TableCell>
              <TableCell>{item?.sub_package}</TableCell>
              <TableCell>{item?.total_guest}</TableCell>
              <TableCell>{item?.total_amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
