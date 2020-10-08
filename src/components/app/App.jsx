import React, {useState} from "react";
import {LeaderBoard} from "../leaderboard/LeaderBoard";
import {Game} from "../game/Game";
import "./App.scss";

export const App = () => {
    const [winners, setWinners] = useState([])
    const [settings, setSettings] = useState([])

    return (
        <>
            <Game
                settings={settings}
                setSettings={setSettings}
            />
            <LeaderBoard
                winners={winners}
                setWinners={setWinners}
            />
        </>
    )
}

