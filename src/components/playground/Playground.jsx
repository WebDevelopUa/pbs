import React from "react";
import {Square} from "../square/Square";
import {INITIAL_SQUARE_COLOR} from "../../helpers/variables";
import "./Playground.scss"

export const Playground = ({playground, color = INITIAL_SQUARE_COLOR, playgroundSquares, onPushSquare}) => (
    <div className="playground">
        <div className="grid">
            {playground ?
                playgroundSquares.map(
                    square => <Square
                        key={Math.random()}
                        onClick={() => onPushSquare(square.id)}
                        playground={playground}
                        color={color}
                        onPushSquare={onPushSquare}
                        {...square}
                    />
                ) : <span className='text-center'>Please select a game mode above</span>
            }
        </div>
    </div>
)
