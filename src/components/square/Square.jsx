import React from "react";
import "./Square.scss";

export const Square = ({playground, color, onPushSquare}) => {
    const size = {
        L_size: playground === 5,
        M_size: playground === 10,
        S_size: playground === 15,
    }

    return (
        <div onClick={onPushSquare}
             className={`square ${color} ${size.L_size ? "L_size" : ''} ${size.M_size ? "M_size" : ''} ${size.S_size ? "S_size" : ''}`}>
        </div>
    )
}
