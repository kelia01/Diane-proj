import React, { useEffect, useState, useRef} from "react";

const ToggleBtn = ({ buttonText, buttonTextHidden, children   }) => {

    const [isVisible, setIsVisible] = useState(true);
    const toggleRef = useRef(null);

    const togglevisibility = () => {
        setIsVisible(!isVisible);
    }

    const handleOutsies = (e) => {
        if(toggleRef.current && !toggleRef.current.contains(e.target )) {
           setIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsies);
        return () => {
            document.removeEventListenerEventListener('mousedown', handleOutsies);
        }
    }, []);
    return (
        <div>ToggleBtn</div>
    )
}

export default ToggleBtn