import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  

  margin: -5.5rem auto 14rem;
  padding: 0 18rem;
`

export const HeaderSearchform = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.75rem;

  > h2 {
    font-family: Nunito, sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;

    color: ${props => props.theme['blue-200']};
  }

  > span {
    font-family: Nunito, sans-serif;
    font-size: 0.875rem;
    line-height: 160%;
    
    color: ${props => props.theme['blue-400']};
  }

`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
