import React from "react";
import {GameSettingsList} from "./GameSettingsList";
import "./GameSettings.scss"

export const GameSettings = ({settings, setSettings, gamer, onChangeGamer, onPushPlayButton, onPushStopButton, onChangeMode, mode}) => (
    <div className="game-settings">

        <div className="mode">
            <GameSettingsList
                settings={settings}
                setSettings={setSettings}
                onChangeMode={onChangeMode}
                mode={mode}
            />
        </div>

        <div className="gamer">
            <input
                type="text"
                placeholder="Gamer name"
                value={gamer}
                onChange={onChangeGamer}
            />
        </div>

        <div className="play">
            <button
                type="button"
                onClick={onPushPlayButton}
            >
                Play
            </button>
        </div>

        <div className="stop">
            <button
                type="button"
                onClick={onPushStopButton}
            >
                Stop
            </button>
        </div>

    </div>
)
