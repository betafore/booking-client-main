import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PackageTable from "./PackageTable";
import PackageAddForm from "./PackageAddForm";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const AdminPackage = () => {
  return (
    <section>
      {/* Add Package Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <span className="text-lg mr-1">+</span>Add Packages
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl border-b pb-2 mb-4">
              Add New Package
            </DialogTitle>

            {/* Add package form */}
            <PackageAddForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Package Table */}
      <PackageTable />
    </section>
  );
};

export default AdminPackage;
