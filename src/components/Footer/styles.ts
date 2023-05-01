import styled from 'styled-components'

export const FooterContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  text-align: center;
  line-height: 20px;

  span {
    width: 100%;
    height: 0.05rem;
    background-color: ${(props) => props.theme['3-font-color']};
    opacity: 0.7;
    margin-bottom: 1.625rem;
  }

  p {
    margin-top: 1rem;
    font-size: 0.85rem;
    color: ${(props) => props.theme['4-font-color']};
  }

  a {
    font-size: 0.85rem;
    color: ${(props) => props.theme['main-font-color']};
    text-decoration: none;
  }

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`
