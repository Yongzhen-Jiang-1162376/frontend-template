"use client";

import React from "react";
import AppSidebar from "@/layout/AppSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AppSidebar />
      {children}
    </div>
  );
}
