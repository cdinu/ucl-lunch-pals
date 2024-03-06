"use client";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import React from "react";
import { CircleUserRound as UserIcon } from "lucide-react";
import { people } from "@/data/people";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const ProfileDropdown = () => {
  const [position, setPosition] = React.useState("BBH");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">
          <UserIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {people.map(({ id, name, department, title }) => (
            <DropdownMenuRadioItem key={id} value="${id}">
              {name}, {department}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
