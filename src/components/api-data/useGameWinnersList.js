import {useEffect} from "react";
import axios from "axios";
import {requestURL} from "../../helpers/variables";

export const useGameWinnersList = (endpoint, winners, setWinners) => {
    useEffect(
        () => {
            (async endpoint => {
                const response = await axios.get(`${requestURL}/${endpoint}`);
                setWinners(response.data)
            })(endpoint)
        }, [endpoint, winners, setWinners]
    )
    return winners
}
