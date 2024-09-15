import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerTitle, FooterTitle, HeaderTitle } from './syles'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Title() {
  return (
    <ContainerTitle>
      <HeaderTitle>
        <a>
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </a>
        <a href="http://">
          ver no GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </HeaderTitle>
      <h1>JavaScript data types and data structures</h1>
      <FooterTitle>
        <p>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </p>
        <p>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </p>
      </FooterTitle>
    </ContainerTitle>
  )
}
