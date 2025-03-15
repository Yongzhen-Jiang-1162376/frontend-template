"use client";
import AppSidebar from "@/layout/AppSidebar";
import AppHeader from "@/layout/AppHeader";
import { useSidebar } from "@/context/SidebarContext";

import React from "react";
import Backdrop from "@/layout/Backdrop";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="lg:flex">
      <AppSidebar />
      <Backdrop />
      <div className={`flex-1 ${mainContentMargin} bg-gray-100 min-h-screen`}>
        <AppHeader />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
