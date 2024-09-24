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

import { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataContexts'

export function Profile() {
  const { user } = useContext(DataContext)
  const imageProf = user?.avatar_url
  return (
    <ProfileContainer>
      <img src={imageProf} alt="" />

      <ProfileContent>
        <ProfileHeader>
          <strong> {user?.name} </strong>
          <a href={user?.html_url}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <ProfileMain>
          <p>
            {user?.bio}
          </p>
        </ProfileMain>
        <ProfileFooter>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            {user?.company}
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers} seguidores
          </p>
        </ProfileFooter>
      </ProfileContent>

    </ProfileContainer>
  )
}
