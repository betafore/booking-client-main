"use client";
import { store } from "@/redux/store";
import React from "react";

/* Core */
import { Provider } from "react-redux";

/* Instruments */

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
