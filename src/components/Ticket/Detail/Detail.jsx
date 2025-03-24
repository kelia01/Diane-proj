import React from "react";
import { Link } from "react-router-dom";
import Warning from "../../AlertMsg/Warning";

const Detail = () => {
   
    const message = (
    <>
       One individual can book only seat, if u want more please <Link to={'/support-team'} className="text-yellow-700 font-medium">Contact Our Support team</Link>
    </>
    )
    //show warning box
    return (
        <div className="w-full space-y-12 pb-16">
        <p></p>
        <TopLayout
          bgImg = {""}
          title = {"Bus Details"}
        />

<RootLayout className='space-y-12 w-full pb-16'>

    {/* Seat Layout and selection action */}

    <div className="w-full space-y-8">

         {/*Warning message */}
         <Warning message={message} />

          {/*Seat layout */}

          <BusSeat />
    </div>
    {/*Bus detail */}
    <div className="w-full flex items-center justify-center flex-col gap-8 text-center">

      <p className="text-base text-neutral-500 font-normal text-justify">
        Sample text for demo purposes
        <span className="text-lg text-neutral-600 font-medium ml-2">
          Want to see more about the bus?
        </span>
      </p>

      <w-full className="flex items-center justify-center gap-6 flex-col"></w-full>
    </div>
</RootLayout>
  </div>
    )
}

export default Detail