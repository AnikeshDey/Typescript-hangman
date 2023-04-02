const HEAD = (
    <div className="hangman__head"/>
)

const BODY = (
    <div className="hangman__body"/>
)

const RIGHT_ARM = (
    <div className="hangman__right-arm"/>
)

const LEFT_ARM = (
    <div className="hangman__left-arm"/>
)

const RIGHT_LEG = (
    <div className="hangman__right-leg"/>
)

const LEFT_LEG = (
    <div className="hangman__left-leg"/>
)

const BODY_PARTS = [
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG
]

type HangmanDrawingProps = {
    numOfGuesses: number
}

export const HangmanDrawing = ({ numOfGuesses }: HangmanDrawingProps) => {
    return <div className="hangman__container">
        {BODY_PARTS.slice(0, numOfGuesses)}
        <div className="hangman__hanger-item-4" />
        <div className="hangman__hanger-item-3" />
        <div className="hangman__hanger-item-2" />
        <div className="hangman__hanger-item-1" />
    </div>
}