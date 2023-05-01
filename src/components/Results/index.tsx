import {
  ButtonContainer,
  ResultsContainer,
  SourceContainer,
  SourceLinkContainer,
  WordPresentationContainer,
} from './styles'
import SourceIcon from '../../assets/images/icon-new-window.svg'
import { Meaning, MeaningProps } from './components/Meaning'

interface ResultsProps {
  word: string
  phonetic: string
  audio: string
  meanings: MeaningProps[] | never[]
  source: string
}

export function Results(props: ResultsProps) {
  const meanings = props.meanings

  function playAudio() {
    const audioElement = document.getElementById('audio') as HTMLAudioElement
    audioElement.src = props.audio
    audioElement.play()
  }

  return (
    <ResultsContainer>
      <WordPresentationContainer>
        <div>
          <h1>{props.word}</h1>
          <p>{props.phonetic}</p>
        </div>
        <ButtonContainer onClick={playAudio}>
          <div></div>
          <div></div>
          <audio id="audio" />
        </ButtonContainer>
      </WordPresentationContainer>
      {meanings.map((meaning: MeaningProps, index: number) => {
        return (
          <Meaning
            key={index++}
            partOfSpeech={meaning?.partOfSpeech}
            definitions={meaning?.definitions}
            synonyms={meaning?.synonyms}
          />
        )
      })}
      <SourceContainer>
        <span></span>
        <div>
          <a href={props.source} target="_blank" rel="noreferrer">
            <p>Source</p>
          </a>
          <SourceLinkContainer>
            <p>{props.source}</p>
            <a href={props.source} target="_blank" rel="noreferrer">
              <img src={SourceIcon} alt="" />
            </a>
          </SourceLinkContainer>
        </div>
      </SourceContainer>
    </ResultsContainer>
  )
}
