import { useRef, useState } from "react";
import { useOutsideAlerter } from "../utils/Hooks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Input from "@mui/material/Input";

import { ClickAwayListener } from "@mui/material/ClickAwayListener";

export default function ReservationModal({
  showReservationModal,
  setShowReservationModal,
}) {
  const [date, setDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleClose = () => {
    setShowReservationModal(false);
  };
  return (
    <>
      <Dialog
        fullWidth={true}
        open={showReservationModal}
        onClose={handleClose}
        className=""
      >
        <DialogTitle>Make a reservation</DialogTitle>
        <DialogContent>
          <div className="flex">
            <TextField
              className="w-2/5 flex-shrink-0"
              margin="dense"
              id="name"
              label="Name"
              type="text"
              variant="standard"
            />
            <TextField
              className="ml-2 w-full"
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              variant="standard"
            />
          </div>

          <div className="flex items-end mt-5">
            <div className="w-2/5 flex-shrink-0">
              <InputLabel id="demo-simple-select-label">
                No. of guests
              </InputLabel>
              <Select
                className="w-full"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={numberOfGuests}
                label="Number of guests"
                onChange={(e) => setNumberOfGuests(e.target.value)}
                variant="standard"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </div>
            <div className="w-full">
              <DateTimePicker
                className=""
                renderInput={(props) => (
                  <TextField
                    className="ml-3 pr-3 w-full"
                    variant="standard"
                    {...props}
                  >
                    <Input color="red" />
                  </TextField>
                )}
                label="Date"
                value={date}
                variant="standard"
                onChange={(newValue) => {
                  setDate(newValue);
                }}
              />
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Reserve</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

/*
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

*/
