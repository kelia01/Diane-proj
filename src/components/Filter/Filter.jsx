import React from "react";
// import './Filter.css'
import PriceRangeSlider from "../PriceRange/PriceRangeSlider";

const Filter = ({ className }) => {

    const [rangeValues, setRangeValues] = React.useState({
        min: 0,
        max: 100
    });

    const handleRangeChange = (values) => {
        setRangeValues({ setRangeValues});
    };
    
    return(
        <div className={`w-full ${className}`}>
            <h1 className="text-xl text-neutral-700 font-semibold">
                Apply filters
            </h1>
            <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
               <h1 className="text-lg text-neutral-300 font-medium">
                Apply filters
                </h1>

                <PriceRangeSlider 
                  min={1000}
                  max={3000}
                  onChange={handleRangeChange}
                  />
            </div>
            {/*Bus Types */}
            <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
            <h1 className="text-lg text-neutral-300 font-medium">
                Bus Types
                </h1>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='ac' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            AC Deluxe <span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='pokharadeluxe' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="pokharadeluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
                          pokharadeluxe  AC Deluxe <span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='mustangdeluxe' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="mustangdeluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Air Suspension <span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='lumbinideluxe' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="lumbinideluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
                          Luxury AC Deluxe <span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>
            </div>

            {/*Bus Companies*/}
            <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
            <h1 className="text-lg text-neutral-300 font-medium">
                Bus Companies
                </h1>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='sworgadwarideluxe' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="sworgadwarideluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Sworgadwari Deluxe<span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='pokharadeluxe' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="pokharadeluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
                          pokhara Deluxe <span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='mustangdeluxe' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="mustangdeluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
                           Mustang Deluxe <span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='lumbinideluxe' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="lumbinideluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
                          Lumbini Deluxe <span className="text-xl text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>
            </div>         
            
        </div>
    )
}

export default Filter

// import React from "react";
// import './Filter.css';
// import PriceRangeSlider from "../PriceRange/PriceRangeSlider";


// const Filter = ({ className }) => {
//     const [rangeValues, setRangeValues] = React.useState({
//         min: 0,
//         max: 100
//     });

//     const handleRangeChange = (values) => {
//         setRangeValues({ setRangeValues });
//     };
    
//     return(
//         <div className={`filter-container ${className}`}>
//             <h1 className="filter-title">Apply filters</h1>
            
//             <div className="filter-box">
//                <h1 className="filter-subtitle">Apply filters</h1>

//                 <PriceRangeSlider 
//                   min={1000}
//                   max={3000}
//                   onChange={handleRangeChange}
//                 />
//             </div>
            
//             {/* Bus Types */}
//             <div className="filter-box space-y-3">
//                 <h1 className="filter-subtitle">Bus Types</h1>

//                 <div className="space-y-2-5">
//                     <div className="checkbox-group">
//                         <input type="checkbox" id='ac' className="filter-checkbox" />
//                         <label htmlFor="ac" className="filter-label">
//                             AC Deluxe <span>(10)</span>
//                         </label>
//                     </div>

//                     <div className="checkbox-group">
//                         <input type="checkbox" id='pokharadeluxe' className="filter-checkbox" />
//                         <label htmlFor="pokharadeluxe" className="filter-label">
//                           Pokhara Deluxe <span>(10)</span>
//                         </label>
//                     </div>

//                     <div className="checkbox-group">
//                         <input type="checkbox" id='mustangdeluxe' className="filter-checkbox" />
//                         <label htmlFor="mustangdeluxe" className="filter-label">
//                             Air Suspension <span>(10)</span>
//                         </label>
//                     </div>

//                     <div className="checkbox-group">
//                         <input type="checkbox" id='lumbinideluxe' className="filter-checkbox" />
//                         <label htmlFor="lumbinideluxe" className="filter-label">
//                           Luxury AC Deluxe <span>(10)</span>
//                         </label>
//                     </div>
//                 </div>
//             </div>

//             {/* Bus Companies */}
//             <div className="filter-box space-y-3">
//                 <h1 className="filter-subtitle">Bus Companies</h1>

//                 <div className="space-y-2-5">
//                     <div className="checkbox-group">
//                         <input type="checkbox" id='sworgadwarideluxe' className="filter-checkbox" />
//                         <label htmlFor="sworgadwarideluxe" className="filter-label">
//                             Sworgadwari Deluxe <span>(10)</span>
//                         </label>
//                     </div>

//                     <div className="checkbox-group">
//                         <input type="checkbox" id='pokharadeluxe' className="filter-checkbox" />
//                         <label htmlFor="pokharadeluxe" className="filter-label">
//                           Pokhara Deluxe <span>(10)</span>
//                         </label>
//                     </div>

//                     <div className="checkbox-group">
//                         <input type="checkbox" id='mustangdeluxe' className="filter-checkbox" />
//                         <label htmlFor="mustangdeluxe" className="filter-label">
//                            Mustang Deluxe <span>(10)</span>
//                         </label>
//                     </div>

//                     <div className="checkbox-group">
//                         <input type="checkbox" id='lumbinideluxe' className="filter-checkbox" />
//                         <label htmlFor="lumbinideluxe" className="filter-label">
//                           Lumbini Deluxe <span>(10)</span>
//                         </label>
//                     </div>
//                 </div>
//             </div>         
//         </div>
//     );
// };

// export default Filter;