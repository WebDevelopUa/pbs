import {useEffect} from "react";
import axios from "axios";
import {requestURL} from "../../helpers/variables";

export const useGameSettingsList = (endpoint, settings, setSettings) => {
    useEffect(
        () => {
            (async endpoint => {
                const response = await axios.get(`${requestURL}/${endpoint}`);
                setSettings(response.data)
            })(endpoint)
        }, [endpoint, settings, setSettings]
    )
    return settings
}
