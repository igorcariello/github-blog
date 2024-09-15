import { DetailsLeft, DetailsRight, HeaderContainer } from './styles'
import imageLogo from '../../assets/logoImage.svg'
import leftDetailsHeader from '../../assets/leftDetails.svg'
import rightDetailsHeader from '../../assets/rightDetails.svg'

export function Header() {
  return (
    <HeaderContainer>
      <DetailsLeft src={leftDetailsHeader} />
      <div>
        <img src={imageLogo} alt="" />
        <h1>Github blog</h1>
      </div>
      <DetailsRight src={rightDetailsHeader} />
    </HeaderContainer>
  )
}
