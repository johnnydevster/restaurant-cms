import { useRef, useState } from "react";
import { useOutsideAlerter } from "../utils/Hooks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReservationModal({
  setShowModal,
  setShowReservationModal,
}) {
  const reservationRef = useRef(null);

  const [name, setName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("0");
  const [date, setDate] = useState(new Date());

  const handleChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

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
      <form className="mt-10">
        <div className="sm:flex">
          <div className="relative w-full sm:w-1/2">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="inputText w-full"
              placeholder=" "
              required
            />
            <span className="floating-label">Full name</span>
          </div>
          <div className="relative w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-2">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="inputText w-full"
              placeholder=" "
              required
            />
            <span className="floating-label">Email</span>
          </div>
        </div>
        <div className="relative w-full mt-7 flex">
          <div className="w-1/2 relative">
            <select
              className={`inputText w-full`}
              name="guests"
              id="numberOfGuests"
              onChange={(e) => {
                setNumberOfGuests(e.target.value);
              }}
            >
              <option value="0">Guests</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <span
              className={`floating-label ${
                numberOfGuests != "0" ? " left-1 -top-5" : "top-2 opacity-0"
              }`}
            >
              Guests
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
