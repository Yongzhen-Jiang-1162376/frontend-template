"use client";

import { useSidebar } from "@/context/SidebarContext";
import React, { useState, useCallback } from "react";
import { House, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  {
    name: "Home",
    icon: <House />,
    path: "/home",
  },
  {
    name: "Employee",
    icon: <Users />,
    path: "/employee",
  },
];

const AppSidebar = () => {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderNavItems = (navItems: NavItem[]) => {
    return (
      <ul className="flex flex-col gap-3">
        {navItems.map((nav, index) => (
          <li key={nav.name}>
            {nav.path && (
              <Link
                href={nav.path}
                className={`menu-item ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }
                ${
                  isExpanded || isHovered || isMobileOpen
                    ? "justify-start"
                    : "justify-center"
                }
                `}
              >
                <span>{nav.icon}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span>{nav.name}</span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  return (
    <aside
      className={`fixed top-0 left-0 border-r border-gray-200 px-6 h-screen
    ${isExpanded || isHovered || isMobileOpen ? "w-[290px]" : "w-[90px]"}

    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center py-4 ${
          isExpanded || isMobileOpen || isHovered
            ? "justify-start"
            : "justify-center"
        }`}
      >
        <Link href="/home">
          {isExpanded || isHovered || isMobileOpen ? (
            <Image
              src="/images/logo/logo.svg"
              alt="Logo"
              width={150}
              height={40}
              priority={false}
            />
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
              priority={false}
            />
          )}
        </Link>
      </div>
      <div>{renderNavItems(navItems)}</div>
    </aside>
  );
};

export default AppSidebar;
