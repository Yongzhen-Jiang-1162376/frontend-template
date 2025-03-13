"use client";

import { useSidebar } from "@/context/SidebarContext";
import React, { useState } from "react";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  {
    name: "Home",
    icon: <></>,
    path: "/home",
  },
  {
    name: "Home",
    icon: <></>,
    path: "/home",
  },
];

const AppSidebar = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <aside
      className={`fixed top-0 left-0 border px-6 h-screen
    ${isExpanded || isHovered || isMobileOpen ? "w-[290px]" : "w-[90px]"}

    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
    ></aside>
  );
};

export default AppSidebar;
