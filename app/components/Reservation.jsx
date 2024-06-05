import DateSelector from "@/app/components/DateSelector";
import ReservationForm from "@/app/components/ReservationForm";
import {
    getBookedDatesByCabinId,
    getCabin,
    getCabins,
    getSettings,
  } from "@/app/lib/data-service";

export default async function Reservation({cabin}) {
    const [ settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id),
      ]);
  return (
    <div className="grid lg:grid-cols-2 border border-primary-800 min-h-[400px]">
          <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin}/>
          <ReservationForm  cabin={cabin}/>
        </div>
  )
}
