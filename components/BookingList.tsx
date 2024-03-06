import { useAtom } from "jotai";
import { bookingsAtom } from "@/data/bookings";
import { Skeleton } from "./ui/skeleton";

interface BookingListProps {
  eatery_id: number;
}

export const BookingList = ({ eatery_id }: BookingListProps) => {
  const [bookings] = useAtom(bookingsAtom);
  if (!bookings || !bookings.length) {
    return <Skeleton className="h-4 w-[250px]" />;
  }
  return (
    <div>
      <h1>Booking List for {eatery_id}</h1>
    </div>
  );
};
