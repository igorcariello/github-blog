import styled from 'styled-components'

export const ContainerTitle = styled.div`
  width: 100%;
  min-height: 10.5rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  background: ${props => props.theme['blue-800']};

  padding: 2rem;

  > h1 {
    font-family: Nunito, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;

    color:${props => props.theme['blue-100']};

    margin-bottom: 0.5rem;
  }

`

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;

  > a, button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    text-transform: uppercase;

    font-family: Nunito, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;

    background: transparent;
    border: none;
    color: ${props => props.theme['blue-base']};

    cursor: pointer;

    svg {
      height: 0.75rem;
      width: 0.75rem;
    }
  }
`

export const FooterTitle = styled.div`
  display: flex;
  gap:2rem;

  > p {
    display: flex;
    gap:0.5rem;
    align-items: center;

    font-family: Nunito, sans-serif;
    line-height: 160%;

    color: ${props => props.theme['blue-400']};

    svg {
      height: 1.125rem;
      width: 1.125rem;
    }
  }
`
