import { DefinitionContainer } from './styles'

export interface DefinitionProps {
  definition: string
  example: string
  synonyms?: string[]
  antonyms?: string[]
}

interface DefinitionsProps {
  content: DefinitionProps[]
}

export function Definition(props: DefinitionsProps) {
  const definitions = props.content
  return (
    <DefinitionContainer>
      {definitions.map((item: DefinitionProps) => {
        return (
          <div key={item.definition}>
            <li>{item.definition}</li>
            {item.example !== undefined ? (
              <p>&quot;{item.example}&quot;</p>
            ) : null}
          </div>
        )
      })}
    </DefinitionContainer>
  )
}
