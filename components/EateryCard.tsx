"use client";
import { BookingList } from "./BookingList";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Eatery } from "@/data/eateries";
import { SandwichIcon } from "lucide-react";

export default function EateryCard({ eatery }: { eatery: Eatery }) {
  const { name, image, tags, type: eateryType } = eatery;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          {" "}
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>
              <SandwichIcon />
            </AvatarFallback>
          </Avatar>
          {name}
        </CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
            <Badge variant={eateryType == "BYO" ? "destructive" : "secondary"}>
              {eateryType}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BookingList eatery_id={eatery.id} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Add myself</Button>
      </CardFooter>
    </Card>
  );
}
