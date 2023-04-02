type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string
}

export const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
    
    return <div className="hangmanword__container">
        {
            wordToGuess.split("").map((letter, index) => {
                return <span key={index} className="hangmanword__letter">
                    <span style={{
                        visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
                    }}>
                        {letter}
                    </span>
                </span>
            })
        }
    </div>
}