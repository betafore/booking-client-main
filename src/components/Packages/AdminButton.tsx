import { Button } from "@/components/ui/button";
import React from "react";

const AdminButton = ({ children }: { children: string }) => {
  return <Button variant={"default"}>{children}</Button>;
};

export default AdminButton;
