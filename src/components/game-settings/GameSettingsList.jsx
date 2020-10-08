import React from "react";
import {useGameSettingsList} from "../api-data/useGameSettingsList";
import {INITIAL_MODE} from "../../helpers/variables";

export const GameSettingsList = ({settings, setSettings, onChangeMode, mode}) => {
    const gameSettings = useGameSettingsList('game-settings', settings, setSettings)
    const gameSettingsArray = Object.entries(gameSettings)

    return (
        <select
            onChange={onChangeMode}
            value={mode}
        >
            <option key={INITIAL_MODE} value={INITIAL_MODE}> ---------</option>
            {gameSettingsArray.length ?
                gameSettingsArray.map(
                    ([key, value]) =>
                        <option key={key}
                                title={`field of ${value.field} squares & click delay ${value.delay}ms`}>
                            {key}
                        </option>
                ) : 'Please wait a moment while the initial data is loading...'
            }
        </select>
    )
}
