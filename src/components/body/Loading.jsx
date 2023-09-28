"use client";
import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <Spinner label="Loading..." color="default" />
    </div>
  );
}
