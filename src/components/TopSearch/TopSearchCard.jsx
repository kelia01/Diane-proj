import React from "react";

const TopSearchCard = ({ routeFrom, routeTo, timeDuration, price}) => {

    return (
        <div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-2">
    
            <div className="space-y-3.5 w-full">
                {/*Route */}
                <div className="space-y-0">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-xs text-neutral-400 font-normal">From</p>
                        <p className="text-xs text-neutral-400 font-normal">To</p>
                    </div>

                    <div className="w-full flex items-center justify-between gap-x-3">
                        {/*From*/}
                        <h1 className="text-xl text-neutral-600 font-semibold">
                            {routeFrom}
                        </h1>

                        {/*time duration */}
                        <div className="flex-1 border-dashed border border-neutral relative">
                            <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400">
                                {timeDuration}
                            </p>
                        </div>

                        {/*To */}
                        <h1 className="text-xl text-neutral-600 font-semibold">
                            {routeTo}
                        </h1>
                </div>
                 
            </div>
                 {/*Facilities */}

          
    
       </div>
            <div className="w-full flex items-center justify-between">
                <h1 className="text-xl text-neutral-700 font-semibold">
                  Rs.  {price}
                </h1>
    
                <button className="w-fit px-5 py-1.5 bg-[#dc2626] hover:bg-transparent border-2 border-[#dc2626] hover:border-[#dc2626] rounded-xl text-base font-normal text-neutral-50 flex items-center">
        
                    Reserve Seat
                </button>
            </div>
        </div>
    )
}
export default TopSearchCard

// import React from "react";
// import "./TopSearchCard.css";

// const TopSearchCard = ({ routeFrom, routeTo, timeDuration, price }) => {
//     return (
//         <div className="top-search-card">
//             <div className="route-section">
//                 <div className="route-labels">
//                     <p>From</p>
//                     <p>To</p>
//                 </div>

//                 <div className="route-info">
//                     <h1 className="route-text">{routeFrom}</h1>

//                     <div className="time-duration">
//                         <p>{timeDuration}</p>
//                     </div>

//                     <h1 className="route-text">{routeTo}</h1>
//                 </div>
//             </div>

//             <div className="footer-section">
//                 <h1 className="price">Rs. {price}</h1>
//                 <button className="reserve-button">Reserve Seat</button>
//             </div>
//         </div>
//     );
// };

// export default TopSearchCard;
