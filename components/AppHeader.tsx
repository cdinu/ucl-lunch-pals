"use client";
import { ProfileDropdown } from "./ProfileDropdown";
import { ZoneDropdown } from "./ZoneDropdown";
import { SandwichIcon } from "lucide-react";

export const Header = () => {
  return (
    <nav className="flex items-center h-14 px-4 border-b justify-between gap-2 sm:gap-4 md:px-6">
      <div className="flex items-center gap-2">
        <SandwichIcon className="h-10 w-10" />
        <span className="text-md font-semibold">UCL Lunch Pals</span>
        <ZoneDropdown />
      </div>
      <div className="flex items-center gap-2">
        <ProfileDropdown />
      </div>
    </nav>
  );
};
export default Header;
