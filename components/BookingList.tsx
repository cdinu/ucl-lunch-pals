import { useAtom } from "jotai";
import { bookingsAtom } from "@/data/bookings";
import { Skeleton } from "./ui/skeleton";
import { peopleDict } from "@/data/people";

interface BookingListProps {
  eatery_id: number;
}

export const BookingList = ({ eatery_id }: BookingListProps) => {
  const [bookings] = useAtom(bookingsAtom);
  if (!bookings) {
    return <Skeleton className="h-4 w-[250px]" />;
  }

  const filteredBookings = bookings.filter(
    (booking) => booking.eatery_id === eatery_id
  );

  if (filteredBookings.length === 0) {
    return <div>No one going there</div>;
  }

  const bookingList = filteredBookings.map((booking) => {
    const { name, department, title } = peopleDict[booking.person_id];

    return (
      <div key={booking.id}>
        {name}, {title}, {department}
      </div>
    );
  });

  const howMany = filteredBookings.length ? filteredBookings.length : "No one";

  return (
    <div>
      <h3>oing ({howMany})</h3>
      {bookingList}
    </div>
  );
};
