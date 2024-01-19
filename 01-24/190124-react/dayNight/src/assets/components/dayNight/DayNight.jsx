import { useState } from "react";

const DayNight = ({ darkMode, setDarkMode }) => {

    const backgroundColor = darkMode ? '#000' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';
    const buttonText = darkMode ? 'Change to Day' : 'Change to Night';



    const toggleBackground = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <body style={{ backgroundColor }}>
                <h1 style={{ color: textColor }}>{darkMode ? 'Night' : 'Day'} </h1>
            <button onClick={toggleBackground}>{buttonText}</button>
            </body>
            
        </>
    )
}
 
export default DayNight;