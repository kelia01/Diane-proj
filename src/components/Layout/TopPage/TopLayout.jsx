import React from "react";
import { motion } from "framer-motion";
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>;
import RootLayout from "../RootLayout";

const TopLayout = ({ bgImg, title, className }) => {
  const variants = {
    hidden: { opacity: 0, y: -800 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className={`w-full h-[30vh] bg-cover bg-no-repeat bg-center relative ${className}`}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      <RootLayout className="absolute top-0 left-0 w-full h-full pb-10
            pt-[9ch] bg-gradient-to-b from-neutral-200/90 via-neutral-500/60
            to-neutral-900/70 flex items-center justify-end flex-col gap-3"
      >
        <motion.h1
        className=
        {`w-full h-[30vh] bg-cover bg-no-repeat bg-center relative ${className}`}
        initial='hidden' animate='visible' exit='hidden' variants={variants}
        transition={{ duration: 0.85, ease: "easeInOut" }}
        >
          {title}
        </motion.h1>
      </RootLayout>
    </motion.div>
  );
};

export default TopLayout;


// import React from "react";
// import { motion } from "framer-motion";
// import RootLayout from "../RootLayout";
// import "./TopLayout.css"; // External CSS file

// const TopLayout = ({ bgImg, title, className }) => {
//   const variants = {
//     hidden: { opacity: 0, y: -800 },
//     visible: { opacity: 1, y: 0 },
//   };
  
//   return (
//     <motion.div
//       className={`top-layout ${className}`}
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//       variants={variants}
//       transition={{ duration: 0.85, ease: "easeInOut" }}
//     >
//       <RootLayout className="root-layout">
//         <motion.h1
//           className="title"
//           initial="hidden"
//           animate="visible"
//           exit="hidden"
//           variants={variants}
//           transition={{ duration: 0.85, ease: "easeInOut" }}
//         >
//           {title}
//         </motion.h1>
//       </RootLayout>
//     </motion.div>
//   );
// };

// export default TopLayout;
