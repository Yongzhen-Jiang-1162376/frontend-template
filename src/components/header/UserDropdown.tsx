"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { ChevronDown, ChevronUp, CircleUserRound, LogOut } from "lucide-react";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dropdown-toggle"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <Image
            width={44}
            height={44}
            src="/images/user/owner.jpg"
            alt="User"
          />
        </span>
        <span className="block mr-1 font-medium text-theme-sm">Musharof</span>

        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] w-[260px] flex flex-col rounded-2xl border broder-gray-200 bg-white p-3 shadow-theme-lg"
      >
        <div>
          <span className="block font-medium text-gray-700 text-theme-sm">
            Musharof Chowdhury
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500">
            randomuser@pimjo.com
          </span>
        </div>
        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/profile"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lgs hover:bg-gray-100 hover:text-gray-700"
            >
              <CircleUserRound /> Edit Profile
            </DropdownItem>
          </li>
        </ul>
        <Link
          href="/logout"
          className="flex items-center gap-3 mt-3 px-4 py-2 text-theme-sm text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <LogOut />
          Logout
        </Link>
      </Dropdown>
    </div>
  );
};

export { UserDropdown };
