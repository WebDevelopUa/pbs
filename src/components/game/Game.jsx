import React, {Component} from "react";
import {sampleSize, range} from "lodash";
import {GameSettings} from "../game-settings/GameSettilgs";
import {GameInfo} from "../game-info/GameInfo";
import {Playground} from "../playground/Playground";
import {
    INITIAL_DELAY,
    INITIAL_GAMER,
    INITIAL_MODE,
    INITIAL_PLAYGROUND,
    INITIAL_PLAYGROUND_SQUARES,
    INITIAL_SQUARE_COLOR,
    RANDOM_SQUARE_COLOR,
} from "../../helpers/variables";
import "./Game.scss";

export class Game extends Component {
    state = {
        gamer: INITIAL_GAMER,
        mode: INITIAL_MODE,
        playground: INITIAL_PLAYGROUND,
        delay: INITIAL_DELAY,
        playgroundSquares: INITIAL_PLAYGROUND_SQUARES,
        activeRandom: null,
        isGameStart: false,
        isGameStop: false,
    }

    render() {
        const {gamer, mode, playground, playgroundSquares, delay} = this.state
        const {settings, setSettings} = this.props

        const onStartGame = () => {
            const playgroundRandomizer = sampleSize(range(0, Math.pow(playground, 2)), Math.pow(playground, 2));
            let i = 0
            const gameTimer = setInterval(
                () => {
                    i++
                    const stopGameTimer = checkGameOver(i)

                    if (stopGameTimer) {
                        onGameOver()
                        clearInterval(gameTimer)
                    } else {
                        generateBlueSquare(playgroundRandomizer)
                    }
                }, delay
            )
        }

        const generatePlaygroundSquares = () => {
            const newPlaygroundSquares = Array.from(
                Array(Math.pow(playground, 2)), (x, i) => i = {'id': i, 'color': INITIAL_SQUARE_COLOR, 'clicked': false})

            if (playground) {
                this.setState({playgroundSquares: newPlaygroundSquares})
            } else {
                console.log('! ERROR ... generatePlaygroundSquares = () =>  ... !')
            }
        }

        const onPushPlayButton = () => {

            if (this.state.isGameStop) {
                generatePlaygroundSquares();
            }

            if (!this.state.isGameStart) {
                this.setState({
                    isGameStart: true,
                    isGameStop: false,
                }, () => onStartGame())
            }
        }

        const onPushStopButton = () => {

            this.setState({
                isGameStart: false,
                activeRandom: null,
                playground: INITIAL_PLAYGROUND,
                delay: INITIAL_DELAY,
                playgroundSquares: INITIAL_PLAYGROUND_SQUARES,
            })
        }

        const onChangeMode = async e => {
            let mode = e.target.value
            await this.setState({mode: mode})

            const updateState = async () => await this.setState({
                playground: settings[mode].field,
                delay: settings[mode].delay,
                playgroundSquares: Array.from(
                    Array(Math.pow(settings[mode].field, 2)), (x, i) => i = {
                        'id': i,
                        'color': INITIAL_SQUARE_COLOR,
                        'clicked': false
                    })
            })

            const resetState = () => this.setState({
                isGameStart: false,
                activeRandom: null,
                playground: INITIAL_PLAYGROUND,
                delay: INITIAL_DELAY,
                playgroundSquares: INITIAL_PLAYGROUND_SQUARES

            })

            if (this.state.isGameStart) {
                await resetState()
            }

            switch (mode) {
                case 'easyMode':
                    console.log('++++--------------EASY')
                    await updateState()
                    break
                case 'normalMode':
                    console.log('++++--------------NORMAL')
                    await updateState()
                    break
                case 'hardMode':
                    console.log('++++--------------HARD')
                    await updateState()
                    break
                default:
                    console.log('++++----------EMPTY')
                    await resetState()
            }
        }

        const onChangeGamer = e => this.setState({gamer: e.target.value})

        const checkGameOver = (i) => {
            return i === playgroundSquares.length + 1 || !this.state.isGameStart
        }

        const generateBlueSquare = (random) => {

            if (this.state.isGameStart && !this.state.isGameStop) {
                const activePlaygroundSquares = [...playgroundSquares]
                const randomPop = random.pop()
                const blueSquare = activePlaygroundSquares[randomPop]

                blueSquare.color = RANDOM_SQUARE_COLOR

                this.setState({
                    activeRandom: randomPop,
                    playgroundSquares: activePlaygroundSquares,
                })
            }
        }

        const onGameOver = () => {
            console.log('!!!!!!! -----> onGameOver <----- !!!!!!!')
            alert('GAME OVER!')
        }

        const onPushSquare = () => console.log('!!!!!!! onPushSquare !!!!!!!')

        return (
            <div className="game">
                <h1 className="title">push blue square game</h1>
                <GameSettings
                    gamer={gamer}
                    settings={settings}
                    setSettings={setSettings}
                    onChangeGamer={onChangeGamer}
                    onPushPlayButton={onPushPlayButton}
                    onPushStopButton={onPushStopButton}
                    onChangeMode={onChangeMode}
                    mode={mode}
                />
                <GameInfo/>
                <Playground
                    playground={playground}
                    playgroundSquares={playgroundSquares}
                    onPushSquare={onPushSquare}
                />
            </div>
        )
    }
}


