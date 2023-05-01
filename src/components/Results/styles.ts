import styled from 'styled-components'

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.3rem;
`

export const WordPresentationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  audio {
    position: absolute;
    display: block !important;
    width: 3rem;
    height: 3rem;
  }

  img {
    cursor: pointer;
    position: relative;
    width: 3rem;
    height: auto;
  }

  > div {
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme['main-font-color']};
    }

    p {
      font-size: 1.125rem;
      color: ${(props) => props.theme['spot-light-color']};
    }
  }

  @media (min-width: 768px) {
    > div {
      margin-top: 2.3rem;
      gap: 1rem;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  cursor: pointer;
  position: relative;

  div:first-child {
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-left: 0.8rem solid ${(props) => props.theme['spot-light-color']};
    border-bottom: 0.5rem solid transparent;
    position: absolute;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    order: 2;
    z-index: 9;
    transition: 200ms;
  }

  div:nth-child(2) {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['spot-light-color']};
    opacity: 0.3;
    position: relative;
    z-index: 0;
    order: 1;
    transition: 200ms;
  }

  &:hover {
    div:first-child {
      border-left: 0.8rem solid ${(props) => props.theme['main-font-color']};
    }

    div:nth-child(2) {
      background-color: ${(props) => props.theme['spot-light-color']};
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    div:first-child {
      border-top: 0.7rem solid transparent;
      border-left: 1.3rem solid ${(props) => props.theme['spot-light-color']};
      border-bottom: 0.7rem solid transparent;
    }

    div:nth-child(2) {
      width: 4.7rem;
      height: 4.7rem;
    }

    &:hover {
      div:first-child {
        border-left: 1.3rem solid ${(props) => props.theme['main-font-color']};
      }
    }
  }
`

export const SourceContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;

  span {
    width: 100%;
    height: 0.05rem;
    background-color: ${(props) => props.theme['3-font-color']};
    opacity: 0.7;
    margin-bottom: 1.625rem;
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme['4-font-color']};
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    p {
      font-size: 0.95rem;
      text-decoration: none;
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.55rem;
    }
  }
`

export const SourceLinkContainer = styled.div`
  margin-top: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    cursor: pointer;
    text-decoration: none;
    font-size: 0.8rem;
    color: ${(props) => props.theme['main-font-color']};

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  img {
    cursor: pointer;
    margin-top: 0.2rem;
    width: 0.8rem;
    height: auto;
  }

  @media (min-width: 768px) {
    margin-top: 0;

    p {
      font-size: 0.9rem;
    }
  }
`
