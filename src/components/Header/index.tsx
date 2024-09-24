import { DetailsLeft, DetailsRight, HeaderContainer } from './styles'
import imageLogo from '../../assets/logoImage.svg'
import leftDetailsHeader from '../../assets/leftDetails.svg'
import rightDetailsHeader from '../../assets/rightDetails.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleNavigateToHome() {
    navigate('/')
  }
  return (
    <HeaderContainer>
      <DetailsLeft src={leftDetailsHeader} />
      <div onClick={handleNavigateToHome}>
        <img src={imageLogo} alt="" />
        <h1>Github blog</h1>
      </div>
      <DetailsRight src={rightDetailsHeader} />
    </HeaderContainer>
  )
}
