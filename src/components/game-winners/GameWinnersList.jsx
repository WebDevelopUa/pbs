import React from "react";
import {useGameWinnersList} from "../api-data/useGameWinnersList";
import "./GameWinnersList.scss"

export const GameWinnersList = ({winners, setWinners}) => {
    const gameWinners = useGameWinnersList('winners', winners, setWinners)
    const gameWinnersArray = Object.entries(gameWinners)

    return (
        <ul className="winners-list">
            {gameWinnersArray.length ?
                gameWinnersArray.map(
                    ([key, value]) =>
                        <li className="item" key={value.id}>
                            <span className="name">{value.winner}</span>&emsp;
                            <span className="date">{value.date}</span>
                        </li>
                ) : 'Please wait a moment while the initial data is loading...'}
        </ul>
    )

}
