import React from "react";

const Die = ({value, isHeld, holdDice}) => {
    const styles = {
        backgroundColor: isHeld ? "seagreen" : "white",
        color: isHeld ? "white" : "black"
    }
    return (
            <div className="die" style={styles} onClick={holdDice}>
            <h2 className="die-num">{value}</h2>
            </div>
        )
    } 

export default Die;