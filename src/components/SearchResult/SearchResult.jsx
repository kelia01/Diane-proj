import React from "react";
import TicketCard from "../TicketCard/TicketCard";
import { FaBus, FaStar } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

const SearchResult = ()=> {
    return (
        <div className="w-full col-span-3 space-y-10 pt-11">
            <div className="space-y-6">

                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                <TicketCard icon={FaBus} busName={'Sworgadwari Deluxe'} routeFrom={"Kathmandu"} routeTo={'Pyuthan'} arrivalTime={'10:00'} departureTime={'10:00'} price={'1600'} availableseats={4}/>
                
            </div>

            <div className="w-full flex items-center justify-center">
                
            <button className="w-fit px-8 py-3 bg-[#dc2626]
            hover:bg-transparent border-2 border-[#dc2626]
            hover:border-[#dc2626] rounded-xl text-base 
            font-normal text-neutral-50 flex items-center">
                <MdRefresh />
                Load More
            </button>
            </div>
        </div>
    )
}

export default SearchResult

// import React from "react";
// import './SearchResult.css'
// const SearchResult = () => {
//     return (
//         <div className="search-result-container">
//             <div className="search-content"></div>
//         </div>
//     );
// }

// export default SearchResult;
