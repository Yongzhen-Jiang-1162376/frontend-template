"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppSidebar from "@/layout/AppSidebar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="xl:flex 2xl:flex">
      <AppSidebar />
      <div className={`flex-1 ${mainContentMargin} bg-gray-500`}>
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
