import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './components/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord'
import { KeyBoard } from './components/KeyBoard'
import words from './wordList.json'
import './App.css'

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter)) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);

  },[guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters]);

  return (
    <div className='container'>
      <h1>Lose or Win</h1>
      <HangmanDrawing numOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{
        alignSelf:"stretch"
      }}>
      <KeyBoard 
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
      </div>
    </div>
  )
}

export default App
