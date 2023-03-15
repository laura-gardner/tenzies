import React from "react";

const Die = ({value, isHeld}) => {
    if (isHeld) {
        return (
            <div className="die die-held">
            <h2 className="die-num">{value}</h2>
            </div>
        )
    } else {
        return (
            <div className="die">
            <h2 className="die-num">{value}</h2>
            </div>
    )
    }
    
}

export default Die;