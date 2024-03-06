import { useAtom } from "jotai";
import { bookingsAtom } from "@/data/bookings";
import { Skeleton } from "./ui/skeleton";
import { peopleDict } from "@/data/people";
import { Badge } from "./ui/badge";

interface BookingListProps {
  eatery_id: number;
}

function formatTime(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? "0" + minutes : "" + minutes;

  const strTime = hours + ":" + strMinutes + ampm;
  return strTime;
}

export const BookingList = ({ eatery_id }: BookingListProps) => {
  const [bookings] = useAtom(bookingsAtom);
  if (!bookings) {
    return <Skeleton className="h-4 w-[250px]" />;
  }

  const filteredBookings = bookings.filter(
    (booking) => booking.eatery_id === eatery_id
  );

  const bookingList = filteredBookings.map((booking) => {
    const { name, department, title } = peopleDict[booking.person_id] || {
      name: "Unknown",
      department: "Unknown",
      title: "Unknown",
    };
    const time = formatTime(new Date(booking.created_at));

    return (
      <div key={booking.id} className="max-w-sm">
        <div className="flex items-center space-x-4">
          <div>
            <div className="text-lg font-medium text-gray-900">
              <Badge>{time}</Badge> {name}
            </div>
            <span className="text-gray-600 mr-1">{title}</span>
            <span className="text-sm text-gray-500">{department}</span>
          </div>
        </div>
      </div>
    );
  });

  const howMany = filteredBookings.length ? filteredBookings.length : "No one";

  return <div>{bookingList}</div>;
};
