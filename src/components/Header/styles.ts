import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 18.5rem;

  display: flex;
  justify-content: space-between;

  

  background: linear-gradient(
    0deg, rgba(50,148,248,0.1) 0%, 
    rgba(11,27,43,1) 100%);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translate(-50%);
    
    cursor: pointer;

    img {
      width: 2.8rem;
      height: 2.5rem;
    }

    h1 {
      text-transform: uppercase;
      font-size: 1.5rem;
      line-height: 160%;
      color: ${props => props.theme['blue-base']};

      font-family: 'Coda', sans-serif;
      font-weight: 400;
    }
  }

`
export const DetailsLeft = styled.img`
  width: 25.5rem;
  height: 11.75rem;

  margin-top: 4.375rem;
`

export const DetailsRight = styled.img`
  width: 23rem;
`
