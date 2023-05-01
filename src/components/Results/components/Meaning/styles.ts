import styled from 'styled-components'

export const MeaningContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.15rem;

  @media (min-width: 768px) {
    margin-top: 2.6rem;
  }
`

export const MeaningTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-style: italic;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme['main-font-color']};
  }

  span {
    flex-grow: 1;
    margin-left: 1.56rem;
    height: 0.05rem;
    background-color: ${(props) => props.theme['3-font-color']};
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }
`

export const MeaningListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.15rem;

  ul {
    position: relative;
    font-size: 1rem;
    color: ${(props) => props.theme['4-font-color']};
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    margin-top: 2.75rem;

    ul {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
  }
`

export const SynonymsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 2rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['4-font-color']};
  }

  div {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;

    strong {
      font-size: 1rem;
      color: ${(props) => props.theme['spot-light-color']};
      line-height: 25px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 2.5rem;

    p {
      font-size: 1.25rem;
    }

    div {
      strong {
        font-size: 1.25rem;
      }
    }
  }
`
