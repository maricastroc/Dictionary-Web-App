import styled from 'styled-components'

export const DictionaryContainer = styled.div`
  padding: 1.5rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['4-font-color']};
  }

  @media (min-width: 768px) {
    max-width: 47rem;
    margin: 0 auto;
    padding: 2.5rem;
  }
`

export const ErrorContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 2.5rem;
  }

  h2 {
    margin: 1.5rem 0 1.2rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['4-font-color']};
  }

  p + p {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 8.25rem;

    h2 {
      margin: 2.75rem 0 1.8rem;
      font-size: 1.5rem;
    }

    p {
      font-size: 1.125rem;
    }

    p + p {
      margin-top: 0.5rem;
    }
  }
`
