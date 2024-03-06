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
import { useAtom } from "jotai";
import { bookingsAtom } from "@/data/bookings";

export default function EateryCard({ eatery }: { eatery: Eatery }) {
  const { name, image, tags, type: eateryType } = eatery;
  const [bookings, setBookings] = useAtom(bookingsAtom);
  const bookingCount = bookings?.length
    ? bookings.filter((booking) => booking.eatery_id === eatery.id).length
    : 0;

  const howMany = bookingCount ? ` (${bookingCount})` : "";
  const addMyself = async () => {
    const newBooking = {
      id: Math.floor(10000 * Math.random()),
      eatery_id: eatery.id,
      person_id: 7865,
      created_at: new Date().toISOString(),
    };
    const newBookings = bookings ? [...bookings, newBooking] : [newBooking];

    setBookings(() => newBookings);
    await fetch("/bookings/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eatery_id: eatery.id,
        person_id: 7865,
        created_at: new Date().toISOString(),
      }),
    });
  };
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
          {name} {howMany}
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
        <Button onClick={addMyself}>Add myself</Button>
      </CardFooter>
    </Card>
  );
}
