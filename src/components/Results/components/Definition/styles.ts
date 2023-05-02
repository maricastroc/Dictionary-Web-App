import styled from 'styled-components'

export const DefinitionContainer = styled.div`
  p {
    position: relative;
    font-size: 0.93rem;
    color: ${(props) => props.theme['main-font-color']};
    margin-top: 0.85rem;
    margin-left: 1.5rem;
    line-height: 24px;
  }

  p::before {
    position: absolute;
    content: '';
    width: 0.3rem;
    height: 0.3rem;
    top: 10px;
    left: -1.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['spot-light-color']};
  }

  span {
    font-size: 0.95rem;
    color: ${(props) => props.theme['4-font-color']};
    margin-top: 0.85rem;
    margin-left: 1.5rem;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.125rem;
      line-height: 32px;
      margin-top: 1rem;
      margin-left: 3rem;
    }

    span {
      margin: 0.8rem 0 1.5rem 3rem;
      font-size: 1rem;
    }
  }
`
