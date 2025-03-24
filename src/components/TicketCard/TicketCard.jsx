import React from "react";
import { FaBus, FaStar } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { RiVipFill } from "react-icons/ri";
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";


const TicketCard = ({icon: Icon, busName, routeFrom, routeTo, arrivalTime,departureTime, price, availableSeats, timeDuration}) => {
    return (
        <div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4">

          {/*bus info, routes */}  

        <div className="space-y-5 w-full border-b border-neutral-300/60 pb-4">
            {/*Route */}
            <div className="space-y-5">

                {/*Bus info */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <FaBus className='h-5 w-5 text-[#dc2626]' />
                        <p className="text-lg text-neutral-700">
                            {busName}
                        </p>
                    </div>

                    <div className="flex items-center gap-x-4">
                       <div className="flex items-center gap-x-1
                       bg-neutral-200/65 w-fit rounded-full px-1.5
                       py-0.5">
                        <TbAirConditioning className='w-4 h-4 text-[#dc2626]' />
                        <p className="text-xs text-neutral-600 font-normal">
                            AC
                        </p>
                       </div>

                       <div className="flex items-center gap-x-1
                       bg-neutral-200/65 w-fit rounded-full px-1.5
                       py-0.5">
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <p className="text-xs text-yellow-600 font-normal pt-0.5">
                            4.5
                        </p>
                       </div>

                       <div className="flex items-center gap-x-1
                       bg-neutral-200/65 w-fit rounded-full px-1.5
                       py-0.5">
                        <RiVipFill className='w-4 h-4 text-[#dc2626]' />
                        <p className="text-xs text-neutral-600 font-normal">
                           sofa
                        </p>
                       </div>

                       <div className="flex items-center gap-x-1
                       bg-neutral-200/65 w-fit rounded-full px-1.5
                       py-0.5">
                        <MdOutlineChair className='w-4 h-4 text-[#dc2626] -rotate-90' />
                        <p className="text-xs text-neutral-600 font-normal">
                           35 seats
                        </p>
                       </div>
                    </div>
                </div>

                {/*Route */}
                <div className="w-full flex items-center justify-between">
                    <div className="w-full flex items-center justify-between gap-x-2.5">
                        <h1 className="text-2xl text-neutral-600
                        font-semibold">
                            {arrivalTime}
                        </h1>

                        <div className="flex-1 border-dashed border border-neutral-300 relative">
                            <p className="absolute w-14 h-14 p-0.5 top-0.5
                            left-0.5 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border border-dashed border-neutral-400
                            rounded-b-full flex items-center justify-center">
                                <Icon className='w-8 h-8 text-[#dc2626]'/>
                            </p>
                        </div>
                        <h1 className="text-2xl text-neutral-600
                        font-semibold">
                            {departureTime}
                        </h1>
                    </div>
                    <div className="w-full flex items-center justify-between gap-x-5">
                        <p className="text-base text-neutral-500 font-normal">
                            {routeFrom}
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            {routeTo}
                        </p>
                    </div>
                </div>

              
                    {/*From*/}
                    <h1 className="text-xl text-neutral-600 font-semibold">
                        {routeFrom}
                    </h1>

                    {/*time duration */}
                    <div className="flex-1 border-dashed border border-neutral-300 relative">
                        <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full
                         items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400">
                            {timeDuration}
                        </p>
                    </div>

                    {/*To */}
                    <h1 className="text-xl text-neutral-600 font-semibold">
                        {routeTo}
                    </h1>
            </div>
             
        </div>
             {/*price, available seats */}

        <div className="w-full flex items-center justify-between">
            <h1 className="text-xl text-neutral-700 font-semibold">
              Rs.  {price} <span className="text-sm text-neutral-500 font-normal">
                /per seat
              </span>
            </h1>

            <h1 className="text-sm text-neutral-600 font-normal flex items-center justify-center gap-x-1.5">
                <span className="text-lg text-green-700 font-bold pt-0.5">{availableSeats}</span> Seats available
            </h1>

            <Link to='/Ticket/Detail' className="w-fit px-5 py-1.5 bg-[#dc2626]
            hover:bg-transparent border-2 border-[#dc2626]
            hover:border-[#dc2626] rounded-xl text-base 
            font-normal text-neutral-50 flex items-center">
    
                Reserve Seat
            </Link>
        </div>
      </div>
     
    )
}

export default TicketCard;

// import React from "react";
// import "./TicketCard.css";
// import { FaBus, FaStar } from "react-icons/fa";
// import { TbAirConditioning } from "react-icons/tb";
// import { RiVipFill } from "react-icons/ri";
// import { MdOutlineChair } from "react-icons/md";

// const TicketCard = ({icon:Icon, busName, routeFrom, routeTo, arrivalTime,departureTime, price,availableSeats, timeDuration }) => {
//     return (
//         <div className="ticket-card">
//             <div className="ticket-header">
//                 <div className="bus-info">
//                     <div className="bus-name">
//                         <FaBus className="bus-icon" />
//                         <p>{busName}</p>
//                     </div>
//                     <div className="bus-features">
//                         <div className="feature">
//                             <TbAirConditioning className="feature-icon" />
//                             <p>AC</p>
//                         </div>
//                         <div className="feature">
//                             <FaStar className="star-icon" />
//                             <p>4.5</p>
//                         </div>
//                         <div className="feature">
//                             <RiVipFill className="feature-icon" />
//                             <p>Sofa</p>
//                         </div>
//                         <div className="feature">
//                             <MdOutlineChair className="chair-icon" />
//                             <p>35 seats</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="route-info">
//                     <h1 className="arrival-time">
//                         {arrivalTime}
//                         </h1>
//                     <div className="route-line">
//                     </div>
//                     <h1 className="arrival-time">
//                         {departureTime}
//                         </h1>

//                     <h1 className="route-text">{routeFrom}</h1>
//                     <div className="duration">
//                         <p>{timeDuration}</p>
//                     </div>
//                     <h1 className="route-text">{routeTo}</h1>
//                 </div>
//             </div>

//             <div className="ticket-footer">
//                 <h1 className="ticket-price">Rs. {price}</h1>
//                 <Link className="reserve-Link">Reserve Seat</Link>
//             </div>
//         </div>
//     );
// };

// export default TicketCard;


// import React from "react";
// import "./TicketCard.css"; // External CSS file
// import { FaBus, FaStar } from "react-icons/fa";
// import { TbAirConditioning } from "react-icons/tb";
// import { RiVipFill } from "react-icons/ri";
// import { MdOutlineChair } from "react-icons/md";


// const TicketCard = ({icon: IconBase, busName, routeFrom, routeTo, arrivalTime, price, availableseats}) => {
//     return (
//         <div className="ticket-card">
    
//         <div className="ticket-card-content">
//             {/* Route */}
//             <div className="route-container">

//                 {/* Bus info */}
//                 <div className="bus-info">
//                     <div className="bus-name">
//                         <FaBus className='bus-icon' />
//                         <p>{busName}</p>
//                     </div>

//                     <div className="bus-features">
//                        <div className="feature">
//                         <TbAirConditioning className='feature-icon' />
//                         <p>AC</p>
//                        </div>

//                        <div className="feature">
//                         <FaStar className='star-icon' />
//                         <p>4.5</p>
//                        </div>

//                        <div className="feature">
//                         <RiVipFill className='feature-icon' />
//                         <p>Sofa</p>
//                        </div>

//                        <div className="feature">
//                         <MdOutlineChair className='feature-icon rotate' />
//                         <p>35 seats</p>
//                        </div>
//                     </div>
//                 </div>

//                 {/* Route */}
//                 <div className="route-details">
//                     <div className="time-info">
//                         <h1>{arrivalTime}</h1>
//                         <div className="dashed-line"></div>
//                     </div>
//                 </div>

//                 {/* From */}
//                 <h1 className="location">{routeFrom}</h1>

//                 {/* Time duration */}
//                 <div className="time-duration">
//                     <p>{timeDuration}</p>
//                 </div>

//                 {/* To */}
//                 <h1 className="location">{routeTo}</h1>
//             </div>
             
//         </div>
//              {/* Price, available seats */}

//         <div className="bottom-section">
//             <h1 className="price">Rs. {price}</h1>
//             <Link className="reserve-btn">Reserve Seat</Link>
//         </div>
//       </div>
//     )
// }

// export default TicketCard;
