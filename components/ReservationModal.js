import { useRef } from "react";
import { useOutsideAlerter } from "../utils/Hooks";
import TextField from "@mui/material/TextField";

export default function ReservationModal({
  setShowModal,
  setShowReservationModal,
}) {
  const reservationRef = useRef(null);

  useOutsideAlerter(reservationRef, () => {
    setShowReservationModal(false);
    setShowModal(false);
  });

  return (
    <div
      ref={reservationRef}
      id="reservation"
      className="bg-gray-100 p-5 sm:p-5 border-t-8 border-yellow-400 w-full sm:w-1/2 max-w-xl fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-96 max-h-screen overflow-auto rounded shadow-lg"
    >
      <div className="flex">
        <h1 className="font-playfair font-bold text-xl inline-block border-b-4 border-yellow-400">
          Make a reservation
        </h1>
      </div>
      <form className="my-5">
        <div className="relative mt-10">
          <input type="text" className="inputText" placeholder=" " required />
          <span className="floating-label">Full name</span>
          <TextField label="Full name" />
        </div>
      </form>
    </div>
  );
}
