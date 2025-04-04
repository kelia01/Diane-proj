import React, {useState} from "react";

const Warning = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };
    if (!isVisible){
        return null;
    };

    return (
        <div className="flex items-center justify-between p-4 text-sm text-yellow-600 bg-yellow-100 rounded-xl" role="alert">
            <span>{message}</span>

            <button 
            onClick={handleClose}
            className="ml-4 text-[#dc2626] hover:text-[#dc2626]/90"
            aria-label='close'
        
            >
            <FaX className='w-3 h-3' />
                 

            </button>
        </div>
    )
}

export default Warning