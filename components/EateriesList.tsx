"use client";
import React, { useEffect } from "react";
import EateryCard from "./EateryCard";
import { eateries } from "@/data/eateries";

import { useAtom } from "jotai";
import { bookingsAtom } from "@/data/bookings";

export default function EateriesList() {
  const [, setBookings] = useAtom(bookingsAtom);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bookings/api", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [setBookings]);

  return (
    <div>
      <div className="flex flex-wrap -m-4 gap-4">
        {eateries.map((eatery) => (
          <EateryCard key={eatery.id} eatery={eatery} />
        ))}
      </div>
    </div>
  );
}
