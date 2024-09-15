import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  background: ${props => props.theme['blue-800']};
  border-radius: 10px;

  padding: 2rem 2rem 2rem 2.5rem;
  margin-bottom: 4rem;

  display: flex;
  gap: 2rem;
  align-items: center;

  > img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }

`
export const ProfileContent = styled.div`
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom:0.5rem;

  > strong {
    font-family: Nunito, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;

    color: ${props => props.theme['blue-100']};
  }

  > a {
    text-decoration: none;
    font-family: Nunito, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${props => props.theme['blue-base']};
  }

  a:hover {
    text-decoration: underline;
  }


`

export const ProfileMain = styled.main`
  font-family: Nunito, sans-serif;
  line-height: 160%;

  color: ${props => props.theme['blue-300']};

  margin-bottom: 1.5rem;

`

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  font-family: Nunito, sans-serif;
  line-height: 160%;
  color: ${props => props.theme['blue-200']};

  > p { 
    display: flex;
    align-items: center;
    gap: 0.5rem;


    svg {
      color: ${props => props.theme['blue-500']};
      width: 1.125rem;
      height: 1.125rem;
    }

  }

`
