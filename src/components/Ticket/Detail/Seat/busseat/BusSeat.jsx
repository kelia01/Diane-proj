import React, { useEffect, useState } from "react";
import busSeatData from "../../../../../Constants/BusSeat/BusSeatData";
import { MdOutlineChair } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi"; // FIXED: Missing import
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ErrorMsg from "../../../../AlertMsg/Error/ErrorMsg";

const BusSeat = () => {
  // Track seat selection
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showError, setShowError] = useState(false);

  // Toggle seat selection
  const handleSeatClick = (seatId) => {
    const selectedSeat = busSeatData.find((seat) => seat.id === seatId);
    if (selectedSeat.status === "booked") {
      return;
    }

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        if (prevSelectedSeats.length >= 10) {
          setShowError(true);
          return prevSelectedSeats;
        } else {
          return [...prevSelectedSeats, seatId];
        }
      }
    });
  };

  // Hide error msg box after 10 secs
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  // Function to determine seat status
  const getSeatName = (seat) => {
    if (seat.status === "booked") {
      return "text-[#dc2626] cursor-not-allowed";
    }
    if (selectedSeats.includes(seat.id)) {
      return "text-yellow-600 cursor-pointer";
    }
    return "text-neutral-500 cursor-pointer";
  };

  return (
    <div className="w-full grid grid-cols-5 gap-10">
      {/* Seat Layout */}
      <div className="col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
        <div className="w-full space-y-7">
          <p className="text-base text-neutral-600 font-medium text-center">
            Click on available seats to reserve your seat.
          </p>

          {/* Seat Layout */}
          <div className="w-full flex items-stretch gap-x-1.5">
            <div className="w-10 h-fit">
              <GiSteeringWheel className="text-3xl mt-7 text-[#dc2626] -rotate-90" />
            </div>

            {/* Seat Rows */}
            <div className="flex flex-col items-center border-1 border-neutral-300 border-dashed pl-7">
              <div className="flex-1 space-y-5">
                {/* 1st row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-2 justify-end">
                  {busSeatData.slice(0, 9).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* 2nd row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-2 justify-end">
                  {busSeatData.slice(9, 18).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* 3rd row */}
                <div className="w-full h-auto grid grid-cols-10 gap-x-2 justify-end">
                  <div className="col-span-9"></div>
                  {busSeatData.slice(18, 19).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* 4th row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-2 justify-end">
                  {busSeatData.slice(19, 28).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* 5th row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-2 justify-end">
                  {busSeatData.slice(28, 37).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Info */}
          <div className="w-full flex items-center justify-center gap-6 border-t border-neutral-300">
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-neutral-500 -rotate-90" />
              <p className="text-sm text-neutral-500 font-medium">Available</p>
            </div>

            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-[#dc2626] -rotate-90" />
              <p className="text-sm text-neutral-500 font-medium">Booked</p>
            </div>

            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-yellow-600 -rotate-90" />
              <p className="text-sm text-neutral-500 font-medium">Selected</p>
            </div>

            <div className="flex items-center gap-x-2">
              <RiMoneyRupeeCircleLine className="text-xl text-neutral-500" />
              <p className="text-sm text-neutral-500 font-medium">NPR. 1600</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seat Selection */}
      <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm">
        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg text-neutral-600 font-medium">
              Your destination
            </h1>
            <Link
              to={"/Ticket"}
              className="text-sm text-[#dc2626] font-normal"
            ></Link>
          </div>

          <div className="space-y-0.5 w-full">
            <div className="w-full flex items-center justify-between gap-x-5">
              <p className="text-sm text-neutral-400 font-normal">
                From <span className="text-xs">{NewBuspark}</span>
              </p>
              <p className="text-sm text-neutral-400 font-normal">
                To <span className="text-xs">{ChakChake}</span>
              </p>
            </div>
            <div className="w-full flex items-center justify-between gap-x-4">
              <h1 className="text-sm text-neutral-600 font-normal">
                Kathmandu{" "}
                <span className="text-sm font-medium">(06:15 AM)</span>
              </h1>
              <div className="flex-1 border-dashed border border-neutral-300" />
              <h1 className="text-sm text-neutral-600 font-normal">
                Kathmandu{" "}
                <span className="text-sm font-medium">(06:15 AM)</span>
                Pyuthan <span className="text-sm font-medium">(08:45 AM)</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg text-neutral-600 font-medium">
              Selected Seats
            </h1>

            <div className="bg-[#dc2626]" />
            <div className="bg-[#dc2626]/20 rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase">
              Non-refundable
            </div>
          </div>
          {selectedSeats.length > 0 ? (
            <div className="w-full flex items-center gap-x-3">
              {selectedSeats.map((seatId) => {
                return (
                  <div
                    key={seatId}
                    className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                  >
                    {seatId}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="w-full flex items-center gap-x-3">
<p className="text-sm text-neutral-500 font-normal">No seats selected</p>
            </div>

          )}
        </div>

        <div className="w-full space-y-2">
            <h1 className="text-lg text-neutral-600 font-medium">
             Fare Details
            </h1>
            <div className="w-full flex items-center justify-between border-l-[1.5px] border-dashed border-neutral-400 pl-2">

<h3 className="text-sm text-neutral-500 font-medium">Basic Fare</h3>
<p className="text-sm text-neutral-500 font-medium">NPR. 1600</p>
            </div>

            <div className="flex items-center justify-between gap-x-4">
                <div className="flex gap-y-0.5 flex-col">
                    <h3 className="text-base text-neutral-500 font-medium">Total Price: </h3>
                    <span className="text-xs text-neutral-500 font-normal"></span>
                    (Including all taxes)
                </div>

                {/**Calculate tot price */}
                <p className="text-base text-neutral-600 font-semibold">
                    NPR {''}
                    {selectedSeats.reduce((total, seatId) => {
                        const seat = busSeatData.find(busSeat => busSeat.id === seatId);
                        return total + (seat ? seat.price: 0);
                    }, 0)}
                </p>
            </div>
   
        </div>
btn.
        <div className="w-full flex items-center justify-center">
            {
                selectedSeats.length > 0 
                ?
                <Link to='/Ticket/checkout' className="w-full bg-[#dc2626] hover:bg-[#dc2626]/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition">
                    Proccessed to checkout
                </Link>
                :
                <div className=" w-full space-y-0.5">
                    <button disabled className="w-full bg-[#dc2626] hover:bg-[#dc2626]/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center cursor-not-allowed uppercase rounded-lg transition">
                    Proccessed to checkout
                </button>
                <small className="text-xs text-neutral-600 font-normal px-1">
                    Please select one seat to proceed to checkout page
                </small>
                </div>
            }
        </div>
      </div>

      {showError && <ErrorMsg message={`You can't select more than 1 seat!`}/>}
    </div>
  );
};

export default BusSeat;
