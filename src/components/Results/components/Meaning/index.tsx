import { Definition, DefinitionProps } from '../Definition'
import {
  MeaningContainer,
  MeaningListContainer,
  MeaningTypeContainer,
  SynonymsContainer,
} from './styles'

export interface MeaningProps {
  partOfSpeech: string
  definitions: DefinitionProps[]
  synonyms: string[]
}

export function Meaning(props: MeaningProps) {
  return (
    <MeaningContainer>
      <MeaningTypeContainer>
        <p>{props.partOfSpeech}</p>
        <span></span>
      </MeaningTypeContainer>
      <MeaningListContainer>
        <ul>Meaning</ul>
        <Definition content={props.definitions} />
        {props.synonyms.length > 0 && (
          <SynonymsContainer>
            <p>Synonyms</p>
            <div>
              {props.synonyms.map((item: string, index: number) => {
                return <strong key={index++}>{item}</strong>
              })}
            </div>
          </SynonymsContainer>
        )}
      </MeaningListContainer>
    </MeaningContainer>
  )
}
