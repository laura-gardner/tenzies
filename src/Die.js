import React from "react";

const Die = ({value, isHeld}) => {
    const styles = {
        backgroundColor: isHeld ? "seagreen" : "white",
        color: isHeld ? "white" : "black"
    }
    return (
            <div className="die" style={styles}>
            <h2 className="die-num">{value}</h2>
            </div>
        )
    } 

export default Die;