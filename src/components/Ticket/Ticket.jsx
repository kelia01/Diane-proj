import React from "react";
// import "./Ticket.css"
import TopLayout from "../Layout/TopPage/TopLayout";
import RootLayout from "../Layout/RootLayout";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import SearchResult from "../SearchResult/SearchResult";
import BusSeat from "./Detail/Seat/busseat/BusSeat";
import { motion } from "framer-motion";


const Ticket = () => {
  return (
    <div className="w-full space-y-12 pb-16">
      <p></p>
      <TopLayout
        bgImg = {""}
        title = {"Reserve your ticket"}
      />

      <RootLayout className='space-y-12 relative'>
        <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
          <motion.h1
          initial={{opacity: 0, y: -800}}
          animate ={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -800}}
          transition={{duration: 1.85, ease: 'easeOut'}}
          className='text-3xl text-neutral-700 font-semibold'
          >
            Want to change the route?
          </motion.h1>

          <Search />
        </div>
        <div className="w-full h-auto grid grid-cols-4 gap-16 relative">
          <div className="col-span-1">
            <Filter className='space-y-4 sticky top-52 z-20'/>
           
          </div>
          <SearchResult />
        </div>
      </RootLayout>
    </div>
  )
}

export default Ticket

// import React from "react";
// import "./Ticket.css";
// import TopLayout from "../Layout/TopPage/TopLayout";
// import RootLayout from "../Layout/RootLayout";
// import Search from "../Search/Search";
// import Filter from "../Filter/Filter";
// import SearchResult from "../SearchResult/SearchResult";
// import { motion } from "framer-motion";

// const Ticket = () => {
//   return (
//     <div className="ticket-container">
//       <p></p>
//       <TopLayout bgImg={""} title={"Reserve your ticket"} />

//       <RootLayout className="ticket-layout">
//         <div className="route-change-container">
//           <motion.h1
//             initial={{ opacity: 0, y: -800 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -800 }}
//             transition={{ duration: 1.85, ease: "easeOut" }}
//             className="route-change-title"
//           >
//             Want to change the route?
//           </motion.h1>
//           <Search />
//         </div>

//         <div className="ticket-content">
//           <div className="filter-container">
//             <Filter className="filter-style" />
//           </div>
//           <SearchResult />
//         </div>
//       </RootLayout>
//     </div>
//   );
// };

// export default Ticket;
