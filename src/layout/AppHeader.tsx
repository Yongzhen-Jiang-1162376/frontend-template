import { useSidebar } from "@/context/SidebarContext";
import { useState } from "react";
import { AlignJustify, X, Ellipsis } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { UserDropdown } from "@/components/header/UserDropdown";

const AppHeader = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 w-full bg-white flex border-gray-200 z-99999 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 sm:gap-4">
          <button
            className="flex items-center justify-center w-10 h-10 text-gray-500 border border-gray-300 rounded-lg z-99999"
            onClick={handleToggle}
          >
            {isMobileOpen ? <X /> : <AlignJustify />}
          </button>

          <Link href="/" className="lg:hidden">
            <Image
              src="/images/logo/logo.svg"
              alt="Logo"
              width={154}
              height={32}
              priority={false}
            />
          </Link>

          <button
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 lg:hidden"
            onClick={toggleApplicationMenu}
          >
            <Ellipsis />
          </button>
        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-end lg:flex w-full gap-4 px-5 py-4 shadow-theme-sm lg:shadow-none`}
        >
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
