import { useEffect, useState } from 'react'
import { Header, ThemeProps } from '../../components/Header'
import { SearchBar } from '../../components/SearchBar'
import { DictionaryContainer, ErrorContainer } from './styles'
import { Results } from '../../components/Results'
import ErrorIcon from '../../assets/images/error_face.svg'
import { Footer } from '../../components/Footer'

interface DictionaryProps {
  onChangeTheme: (value: ThemeProps) => void
}

export function Dictionary(props: DictionaryProps) {
  const [wordToSearch, setWordToSearch] = useState('keyboard')
  const [wordResult, setWordResult] = useState('')
  const [phonetic, setPhonetic] = useState('')
  const [audio, setAudio] = useState('')
  const [meanings, setMeanings] = useState<any>([])
  const [source, setSource] = useState('')
  const [error, setError] = useState(false)
  const [titleError, setTitleError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [resolutionError, setResolutionError] = useState('')

  function ChangeActualTheme(value: ThemeProps) {
    props.onChangeTheme(value)
  }

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setError(false)
        setWordResult(data[0].word)
        setPhonetic(data[0]?.phonetic)
        const audioObj = data[0]?.phonetics.find((p: any) => p.audio)
        setAudio(audioObj?.audio || '')
        setMeanings(data[0]?.meanings)
        setSource(data[0]?.sourceUrls[0])
      })
      .catch(() => {
        setError(true)
        setTitleError('No Definitions Found!')
        setMessageError(
          "Sorry pal, we couldn't find definitions for the word you were looking for.",
        )
        setResolutionError(
          'You can try the search again at later time or head to the web instead.',
        )
      })
  }, [wordToSearch])

  return (
    <div>
      <DictionaryContainer>
        <Header onChange={ChangeActualTheme} />
        <SearchBar onSearch={(value: string) => setWordToSearch(value)} />
        {error ? (
          <ErrorContainer>
            <img src={ErrorIcon} alt="" />
            <h2>{titleError}</h2>
            <p>{messageError}</p>
            <p>{resolutionError}</p>
          </ErrorContainer>
        ) : (
          <Results
            word={wordResult}
            phonetic={phonetic}
            audio={audio}
            meanings={meanings}
            source={source}
          />
        )}
        <Footer />
      </DictionaryContainer>
    </div>
  )
}
