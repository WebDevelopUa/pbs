import React from "react";
import "./GameInfo.scss"

export const GameInfo = ({gameOver}) => (
    <div className="game-info">
        {gameOver ? <h3 className="warning text-center">Game Over!</h3> :
            <p className="text-center"> RULES: try to push blue square</p>}
    </div>
)

