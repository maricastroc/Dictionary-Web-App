import { MagnifyingGlass } from 'phosphor-react'
import { Error, SearchBarContainer } from './styles'
import { ChangeEvent, FormEvent, useState } from 'react'

interface SearchBarProps {
  onSearch: (value: string) => void
}

export function SearchBar(props: SearchBarProps) {
  const [word, setWord] = useState('')
  const [error, setError] = useState(false)

  function handleSetInputWord(ev: ChangeEvent<HTMLInputElement>) {
    ev.target.setCustomValidity('')
    setWord(ev.target.value)
  }

  function handleSearchWord(ev: FormEvent) {
    ev.preventDefault()
    word ? props.onSearch(word) : handleInvalidInput()
    setWord('')
  }

  function handleInvalidInput() {
    setError(true)
  }

  return (
    <>
      <SearchBarContainer>
        <form
          className={error ? 'invalid_form' : 'valid_form'}
          onSubmit={handleSearchWord}
        >
          <input
            id="search_word"
            aria-label="SearchWord"
            type="text"
            placeholder="Search for any word..."
            onChange={handleSetInputWord}
            value={word}
            onClick={() => setError(false)}
          />
          <button
            id="search_button"
            type="submit"
            aria-label="search_for_word_description"
          >
            <MagnifyingGlass size={20} className="icon" />
          </button>
        </form>
      </SearchBarContainer>
      {error && (
        <Error>
          <p>Whoops, can&apos;t be empty...</p>
        </Error>
      )}
    </>
  )
}
