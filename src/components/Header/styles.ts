import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    cursor: pointer;
    height: 2rem;
    width: auto;
  }

  @media (min-width: 768px) {
    > img {
      height: 2.25rem;
    }
  }
`
export const HeaderFeaturesContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    background-color: ${(props) => props.theme['3-font-color']};
    height: 2rem;
    width: 0.1rem;
    margin: 0 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  @media (min-width: 768px) {
    > span {
      margin: 0 1.625rem;
    }
  }
`
