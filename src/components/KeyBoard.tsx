import { useEffect } from "react"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyBoardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export const KeyBoard = ({ activeLetters, inactiveLetters, addGuessedLetter }: KeyBoardProps) => {
    useEffect(() => {
        console.log(activeLetters);
    }, [activeLetters]);
    return <div className="keyboard__container">
        {
            KEYS.map(key => {
                return <button disabled={activeLetters.includes(key) || inactiveLetters.includes(key)} onClick={() => addGuessedLetter(key)} className={`keyboard__btn ${activeLetters.includes(key) && "active"} ${inactiveLetters.includes(key) && "inactive"}`} key={key}>{key}</button>
            })
        }
    </div>
}