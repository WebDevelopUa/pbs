import React from "react";
import {GameWinnersList} from "../game-winners/GameWinnersList";
import "./LeaderBoard.scss";

export const LeaderBoard = ({winners, setWinners}) => (
    <div className="board">
        <h1 className="title">LeaderBoard</h1>
        <GameWinnersList winners={winners} setWinners={setWinners}/>
    </div>
)

