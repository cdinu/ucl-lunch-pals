"use client";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import React from "react";
import { Home as HomeIcon, ChevronDownIcon } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const ZoneDropdown = () => {
  const [position, setPosition] = React.useState("BBH");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <HomeIcon className="mr-2 h-4 w-4" />
          Bidborough House
          <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="BBH">
            Bidborough House
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="UCLH">
            UCL Hospital Euston
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Online">Online</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
