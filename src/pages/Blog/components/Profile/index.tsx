import {
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
  ProfileMain,
} from './styles'

import { FontAwesomeIcon }
  from '@fortawesome/react-fontawesome'

import { faBuilding, faUserGroup, faArrowUpRightFromSquare }
  from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

import imageProfile
  from '../../../../assets/Bárbara e Igor (372) (Cópia).jpg'

export function Profile() {
  const imageProf = imageProfile
  return (
    <ProfileContainer>
      <img src={imageProf} alt="" />

      <ProfileContent>
        <ProfileHeader>
          <strong> Cameron Williamson </strong>
          <a href="http://">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <ProfileMain>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas.
            Eu viverra massa quam dignissim aenean malesuada suscipit.
            Nunc, volutpat pulvinar vel mass.
          </p>
        </ProfileMain>
        <ProfileFooter>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </p>
        </ProfileFooter>
      </ProfileContent>

    </ProfileContainer>
  )
}
